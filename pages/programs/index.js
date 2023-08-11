import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";
import cx from "classnames";

import { fetchProgramList } from "queries";
import styles from "./programs.module.scss";
import ProgramAdressInput from "./components/ProgramAddressInput";
import Loader from "./components/Loader";

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
  const {
    ["p_Program Address"]:
      address = "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB",
  } = router.query;
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const { data: programList = {}, isLoading } = useQuery("PROGRAM_LIST", () =>
    fetchProgramList().then((list) =>
      list.reduce((obj, item) => ({ ...obj, [item.program]: item }), {})
    )
  );

  const title = programList[address]?.program_name ?? "Solana Program";
  const subTitle = address;

  return (
    <div className={styles.programContainer}>
      <div className="dashboard">
        <ProgramAdressInput isDashboard />
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
                client="tl"
                token="oIEupNW8g4Ua9C64JvUsYRLNlOZej940x341KaAH"
                className={styles.dashboard}
                loader={<Loader />}
                onDashboardLoad={() => setDashboardLoading(false)}
              />
            </div>
            {!isLoading && !dashboardLoading && (
              <div className={styles.talkToUs}>
                <a
                  title="telegram"
                  draggable="false"
                  href="https://telegram.me/ergon50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    draggable="false"
                    src="/assets/images/telegram-icon.svg"
                  />
                  Talk to us
                </a>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
}

export default Programs;
