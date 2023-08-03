import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

import DashboardLoader from "./components/DashboardLoader";
import WidgetContainer from "./components/WidgetContainer";
import WidgetWrapper from "./components/WidgetWrapper";
import { fetchProgramDashboard } from "./queries";
import CategoryList from "./components/CategoryList";
import { categories } from "./components/constanst";

import styles from "./programs.module.scss";
import SearchDashboards from "pages/home/components/SearchDashboards";
import ProgramAdressInput from "./components/ProgramAddressInput";

const TLDashboards = dynamic(
  async () => {
    const DashboardModule = await import("tl-dashboards");
    console.log("DashboardModule", DashboardModule);

    return DashboardModule;
  },
  {
    loading: () => <p>...Loading</p>,
    ssr: false,
  }
);

function Programs() {
  const router = useRouter();
  const { programName } = router.query;
  const [category, setCategory] = useState("general");

  const { data, isLoading } = useQuery(["PROGRAMD_DATA", programName], () =>
    fetchProgramDashboard(programName)
  );

  const title = data?.title;
  const subTitle = data?.subTitle;
  const widgetList = data?.[category];
  const handleCategorySelect = useCallback((category) => {
    setCategory(category.key);
  }, []);

  const categorieList = categories.filter(({ key }) => data?.[key]);

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
          </div>
        </div>
      )}
    </div>
  );
}

export default Programs;
