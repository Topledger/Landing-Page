import Header from "@/components/Header";
import Page from "@/components/Page";

import TrialSection from "@/components/TrialSection";
import DashboardsSection from "./components/DashboardsSection";
import {
  dashboards,
  // dashboardSorter,
  // getAllDashboards,
  // getCreationDate,
} from "helpers/dashboard";

export const DASHBOARD_ICONS = {
  Metaplex: "/assets/images/dashboards/metaplex.svg",
  Drip: "/assets/images/dashboards/drip logo.svg",
  "Drift trade": "/assets/images/dashboards/drift logo.svg",
  Helium: "/assets/images/dashboards/helium.svg",
  "Helium mobile subscribers": "/assets/images/dashboards/helium.svg",
  //Phoenix: "/assets/images/dashboards/phoenix.svg",
  Tensor: "/assets/images/dashboards/tensor logo.svg",
  "Flash trade": "/assets/images/dashboards/flash trade.svg",
};

const DashboardList = ({ dashboards }) => {
  return (
    <Page>
      <Header />

      <DashboardsSection dashboards={dashboards} />

      <TrialSection />
    </Page>
  );
};

DashboardList.getInitialProps = async () => {
  // const dashboards = await getAllDashboards();
  // const sorter = dashboardSorter(getCreationDate, "desc");
  // return {
  //   dashboards: dashboards?.data?.sort(sorter)?.map((d) => ({
  //     id: d.id,
  //     name: d.attributes.title,
  //     href: d.attributes.link,
  //     icon:
  //       d.attributes.icon ??
  //       DASHBOARD_ICONS[d.attributes.title] ??
  //       "/assets/images/dashboards/solana.svg",
  //   })),
  // };

  return { dashboards };
};

export default DashboardList;
