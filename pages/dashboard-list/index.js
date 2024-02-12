import Header from "@/components/Header";
import Page from "@/components/Page";

import TrialSection from "@/components/TrialSection";
import DashboardsSection from "./components/DashboardsSection";
import {
  dashboardSorter,
  getAllDashboards,
  getCreationDate,
} from "helpers/dashboard";

const DASHBOARD_ICONS = {
  Metaplex: "/assets/images/dashboards/metaplex.svg",
  Drip: "/assets/images/dashboards/drip logo.svg",
  "Drift public dashboard": "/assets/images/dashboards/drift logo.svg",
  Helium: "/assets/images/dashboards/helium.png",
  Phoenix: "/assets/images/dashboards/phoenix.png",
  Tensor: "/assets/images/dashboards/tensor logo.svg",
  "Flash Trade": "/assets/images/dashboards/flash trade.svg",
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
  const dashboards = await getAllDashboards();
  const sorter = dashboardSorter(getCreationDate, "desc");
  return {
    dashboards: dashboards?.data?.sort(sorter)?.map((d) => ({
      id: d.id,
      name: d.attributes.title,
      href: d.attributes.link,
      icon:
        d.attributes.icon ??
        DASHBOARD_ICONS[d.attributes.title] ??
        "/assets/images/dashboards/solana.svg",
    })),
  };
};

export default DashboardList;
