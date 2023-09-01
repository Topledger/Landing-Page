import { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { sendEvent } from "helpers/gaHelper";
import { fetchProgramList } from "queries";
import Loader from "./components/Loader";
import ProgramAdressInput from "./components/ProgramAddressInput";
import styles from "./programs.module.scss";

const FeedbackForm = dynamic(() => import(/** webackChunkName: "FeedbackForm" */"@/components/FeedbackForm"), {
  ssr: false
});

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
  const router = useRouter();
  const dashboardRef = useRef();
  const { ["p_Program Address"]: address } = router.query;
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const parametersRef = useRef();

  const { data: programList = {}, isLoading } = useQuery(
    "PROGRAM_LIST",
    () =>
      fetchProgramList().then((list) =>
        list.reduce((obj, item) => ({ ...obj, [item.program]: item }), {})
      ),
    {
      cacheTime: 3600,
    }
  );

  const title = programList[address]?.program_name ?? "Solana Program";
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
            parameter.name === "Program Address" &&
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

  return (
    <>
      <DashboardHead programName={title} />
      <div className={styles.programContainer}>
        <div className="dashboard">
          <ProgramAdressInput isDashboard onApply={() => {}} />
          <>
            <div className="dashboard-component">
              <div className="title">
                <span className="title-text">{title}</span>
                <span className="title-subtext">{subTitle}</span>
              </div>
              {isLoading && <Loader />}
              <div
                className={cx(styles.dashboardContainer, { dashboardLoading })}
              >
                <TLDashboards
                  key={address}
                  client="tl"
                  token="oIEupNW8g4Ua9C64JvUsYRLNlOZej940x341KaAH"
                  className={styles.dashboard}
                  loader={<Loader />}
                  onDashboardLoad={handleDashboardLoad}
                  parameters={parametersRef.current}
                  dashboardRef={dashboardRef}
                />
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
