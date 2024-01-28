import Header from "@/components/Header";
import Page from "@/components/Page";

import TrialSection from "@/components/TrialSection";
import DashboardsSection from "./components/DashboardsSection";
import {
  dashboardSorter,
  getAllDashboards,
  getCreationDate,
} from "helpers/dashboard";

// const dashboards = [
//   {
//     name: "Metaplex",
//     href: "https://analytics.topledger.xyz/metaplex/public/dashboards/T50WQTTu2Cbz8hG0vge18izUO5ghEDrWhzb92knN",
//     icon: "/assets/images/dashboards/metaplex.svg",
//     target: "_blank",
//   },
//   {
//     name: "Drip",
//     href: "https://topledger.xyz/dashboards/drip",
//     icon: "/assets/images/dashboards/drip.png",
//   },
//   {
//     name: "Drift",
//     href: "https://topledger.xyz/dashboards/drift",
//     icon: "/assets/images/dashboards/drift.png",
//   },
//   {
//     name: "Helium",
//     href: "https://topledger.xyz/dashboards/helium",
//     icon: "/assets/images/dashboards/helium.png",
//   },
//   {
//     name: "Phoenix",
//     href: "https://topledger.xyz/dashboards/phoenix",
//     icon: "/assets/images/dashboards/phoenix.png",
//   },
// ];

const DASHBOARD_ICONS = {
  Metaplex: "/assets/images/dashboards/metaplex.svg",
  Drip: "/assets/images/dashboards/drip.png",
  Drift: "/assets/images/dashboards/drift.png",
  Helium: "/assets/images/dashboards/helium.png",
  Phoenix: "/assets/images/dashboards/phoenix.png",
};

const DashboardList = ({ dashboards }) => {
  console.log("dashboards", dashboards);
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
        "/assets/images/dashboards/generic.svg",
    })),
  };
};

export default DashboardList;
