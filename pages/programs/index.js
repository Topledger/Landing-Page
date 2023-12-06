import { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

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

const DASHBOARDS = {
  programs: {
    client: "tl",
    token: "oIEupNW8g4Ua9C64JvUsYRLNlOZej940x341KaAH",
    adddressParamName: "Program Address",
    title: "Solana Program",
  },
  wallet: {
    client: "tl",
    token: "ZfXfJZaOF4bGnQjV7W7C8xDkfHHDptITVJkQ8SF3",
    adddressParamName: "Program Address",
    title: "Solana Wallet",
  },
  token: {
    client: "tl",
    token: "NECxpxtYkwl4p3AnXN8pUEZpdy57h8jO0xADB3PZ",
    adddressParamName: "Program Address",
    title: "Solana Token",
  },
};

function Programs() {
  const router = useRouter();
  const dashboardRef = useRef();
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const parametersRef = useRef();
  const [dashboard, setDashboard] = useState(DASHBOARDS.programs);
  const { [`p_${dashboard.adddressParamName}`]: address } = router.query;

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
    [programList]
  );

  useEffect(() => {
    updateParameterAddress(address);
  }, [address]);

  useEffect(() => {
    if (address) {
      sendEvent("dashboard", { title, address });
    }
    // pageView({ path: window.location.pathname, title });
  }, [address]);

  useEffect(() => {
    if (addressInfo) {
      console.log("addressInfo", addressInfo);
      setDashboard(
        addressInfo.isProgram
          ? DASHBOARDS.programs
          : addressInfo.isToken
          ? DASHBOARDS.token
          : DASHBOARDS.wallet
      );
    }
  }, [addressInfo]);

  return (
    <>
      <DashboardHead programName={title} />
      <div className={styles.programContainer}>
        <div className="dashboard">
          <ProgramAdressInput
            isDashboard
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
                    client={dashboard.client}
                    token={dashboard.token}
                    className={styles.dashboard}
                    loader={<Loader />}
                    onDashboardLoad={handleDashboardLoad}
                    parameters={parametersRef.current}
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

export default Programs;
