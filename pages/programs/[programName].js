import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import DashboardLoader from "./components/DashboardLoader";
import WidgetContainer from "./components/WidgetContainer";
import WidgetWrapper from "./components/WidgetWrapper";
import { fetchProgramDashboard } from "./queries";
import CategoryList from "./components/CategoryList";
import { categories } from "./components/constanst";

import styles from "./programs.module.scss";

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
          <div className="title">
            <span className="title-text">{title}</span>
            <span className="title-subtext">{subTitle}</span>
          </div>
          <div className="categories">
            {categorieList.length > 1 && (
              <CategoryList
                categories={categorieList}
                onSelect={handleCategorySelect}
              />
            )}
          </div>
          <WidgetContainer>
            {widgetList?.map((widget) => (
              <WidgetWrapper key={widget.id} widget={widget} />
            ))}
          </WidgetContainer>
        </div>
      )}
    </div>
  );
}

export default Programs;
