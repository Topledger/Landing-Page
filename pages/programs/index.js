import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

import DashboardLoader from "./components/DashboardLoader";
import WidgetContainer from "./components/WidgetContainer";
import WidgetWrapper from "./components/WidgetWrapper";
import { fetchProgramDashboard, fetchProgramList } from "./queries";
import CategoryList from "./components/CategoryList";
import { categories } from "./components/constanst";

import styles from "./programs.module.scss";
import SearchDashboards from "pages/home/components/SearchDashboards";
import ProgramAdressInput from "./components/ProgramAddressInput";
import Loader from "./components/ComponentLoader";

const TLDashboards = dynamic(
  async () => {
    const DashboardModule = await import("tl-dashboards");
    console.log("DashboardModule", DashboardModule);

    return DashboardModule;
  },
  {
    loading: () => <Loader />,
    ssr: false,
  }
);

function Programs() {
  const router = useRouter();
  const { programName, ["p_Program Address"]: address } = router.query;
  console.log("router.query", router.query);
  // const [category, setCategory] = useState("general");

  // const { data, isLoading } = useQuery(["PROGRAMD_DATA", programName], () =>
  //   fetchProgramDashboard(programName)
  // );
  const { data: programList = {}, isLoading } = useQuery("PROGRAM_LIST", () =>
    fetchProgramList().then((list) =>
      list.reduce((obj, item) => ({ ...obj, [item.program]: item }), {})
    )
  );

  const title = programList[address]?.program_name ?? "Solana Program";
  const subTitle = address;
  // const widgetList = data?.[category];
  // const handleCategorySelect = useCallback((category) => {
  //   setCategory(category.key);
  // }, []);

  // const categorieList = categories.filter(({ key }) => data?.[key]);

  return (
    <div className={styles.programContainer}>
      {isLoading ? (
        <DashboardLoader />
      ) : (
        <div className="dashboard">
          <ProgramAdressInput />
          {/* <div className="categories">
            {categorieList.length > 1 && (
              <CategoryList
                categories={categorieList}
                onSelect={handleCategorySelect}
              />
            )}
          </div> */}
          {/* <WidgetContainer>
            {widgetList?.map((widget) => (
              <WidgetWrapper key={widget.id} widget={widget} />
            ))}
          </WidgetContainer> */}
          <div className="dashboard-component">
            <div className="title">
              <span className="title-text">{title}</span>
              <span className="title-subtext">{subTitle}</span>
            </div>
            <TLDashboards
              client="tl"
              token="oIEupNW8g4Ua9C64JvUsYRLNlOZej940x341KaAH"
              className={styles.dashboard}
            />
            <div className={styles.talkToUs}>
              <a
                title="telegram"
                draggable="false"
                href="https://telegram.me/ergon50"
                target="_blank"
                rel="noreferrer"
              >
                <img draggable="false" src="/assets/images/telegram-icon.svg" />
                Talk to us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Programs;
