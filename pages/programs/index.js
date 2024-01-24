import { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useQuery } from "react-query";

import {
  DASHBOARDS,
  DASHBOARD_PARAM_MAPPING,
  PARAMETER_NAMES,
} from "constants/constants";
import { useSearchObject } from "helpers/utils";
import { sendEvent } from "helpers/gaHelper";
import { fetchAddressInfo, fetchProgramList } from "queries";
import Loader from "./components/Loader";
import ProgramAdressInput from "./components/ProgramAddressInput";
import styles from "./programs.module.scss";

const FeedbackForm = dynamic(
  () =>
    import(/** webackChunkName: "FeedbackForm" */ "@/components/FeedbackForm"),
  {
    ssr: false,
  }
);

const DashboardHead = ({ programName }) => (
  <Head>
    <title>User Engagement Tracker | Top Ledger</title>
    <meta name="description" content=""></meta>
    <meta
      name="keywords"
      content={`${programName}, User Engagement Tracker, Top Ledger, Crypto Analytics, Solana Analytics, Solana Blockchain`}
    ></meta>
  </Head>
);

const TLDashboards = dynamic(
  async () => {
    const DashboardModule = await import("tl-dashboards");
    console.log("DashboardModule", DashboardModule);

    return DashboardModule;
  },
  {
    loading: () => (
      <div className={styles.dashboardLoader}>
        <Loader />
      </div>
    ),
    ssr: false,
  }
);

function Programs() {
  const query = useSearchObject();
  const dashboardRef = useRef();
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const parametersRef = useRef();

  const [parameterName, setParameterName] = useState(
    PARAMETER_NAMES.find((name) => query[`p_${name}`]) ??
      DASHBOARDS.programs.adddressParamName
  );

  const [dashboard, setDashboard] = useState(
    DASHBOARD_PARAM_MAPPING[parameterName]
  );
  const address = query[`p_${parameterName}`];

  const { data: programList = {}, isLoading } = useQuery(
    "PROGRAM_LIST",
    () =>
      fetchProgramList().then((list) =>
        list.reduce((obj, item) => ({ ...obj, [item.program]: item }), {})
      ),
    {
      cacheTime: 3600,
      refetchOnWindowFocus: false,
    }
  );

  const { data: addressInfo, isLoading: isAddressLoading } = useQuery(
    ["ADDRESS_INFO", address],
    () => fetchAddressInfo({ address }),
    {
      cacheTime: 3600,
      refetchOnWindowFocus: false,
      enabled: !!address,
    }
  );

  const title = programList[address]?.program_name ?? dashboard?.title;
  const subTitle = address;

  const handleDashboardLoad = useCallback(
    ({ parameters }) => {
      setDashboardLoading(false);
      parametersRef.current = parameters;
      updateParameterAddress(address);
    },
    [address]
  );

  const updateParameterAddress = useCallback(
    (address) => {
      const parameters = parametersRef.current;
      if (parameters) {
        let updated = false;
        parameters.forEach((parameter) => {
          if (
            parameter.name === dashboard.adddressParamName &&
            parameter.getExecutionValue() !== address
          ) {
            parameter.setValue(address);
            updated = true;
          }
        });
        if (updated) {
          dashboardRef.current?.refreshDashboard([...parameters]);
        }
      }
    },
    [programList, dashboard]
  );

  useEffect(() => {
    updateParameterAddress(address);
  }, [dashboard, address]);

  useEffect(() => {
    if (address) {
      sendEvent("dashboard", { title, address });
    }
    // pageView({ path: window.location.pathname, title });
  }, [address]);

  useEffect(() => {
    if (addressInfo) {
      console.log("addressInfo", addressInfo);
      const dashboard = addressInfo.isWallet
        ? DASHBOARDS.wallet
        : addressInfo.isToken
        ? DASHBOARDS.token
        : DASHBOARDS.programs;
      setDashboard(dashboard);
      setParameterName(dashboard.adddressParamName);
    }
  }, [addressInfo]);

  return (
    <>
      <DashboardHead programName={title} />
      <div className={styles.programContainer}>
        <div className="dashboard">
          <ProgramAdressInput
            isDashboard
            parameterName={parameterName}
            onApply={() => {}}
            programs={programList}
          />
          <>
            <div className="dashboard-component">
              <div className="title">
                <span className="title-text">{title}</span>
                <span className="title-subtext">{subTitle}</span>
              </div>
              {isLoading && isAddressLoading && <Loader />}
              <div
                className={cx(styles.dashboardContainer, { dashboardLoading })}
              >
                {address && dashboard.token && dashboard.client && (
                  <TLDashboards
                    key={address}
                    client={"tl"}
                    token={"nVzjszC7V9cMjdohSocIBOLEfZWAp0aduC3j5YAV"}
                    className={styles.dashboard}
                    loader={<Loader />}
                    onDashboardLoad={handleDashboardLoad}
                    // parameters={parametersRef.current}
                    dashboardRef={dashboardRef}
                  />
                )}
              </div>
              {!isLoading && !dashboardLoading && <FeedbackForm />}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Programs), {
  ssr: false,
});
