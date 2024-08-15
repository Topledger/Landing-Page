import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://admin.topledger.xyz/api",
});

/**
 * @param {Function} getValue
 * @param {'asc' | 'desc'} sortOrder
 * @returns
 */
export const dashboardSorter =
  (getValue, sortOrder = "asc") =>
  (dashboard1, dashboard2) =>
    (sortOrder === "desc" ? -1 : 1) *
    (getValue(dashboard1) - getValue(dashboard2));

export const getCreationDate = (dashboard) =>
  new Date(dashboard?.attributes?.createdAt).getTime();

export const getAllDashboards = async () => {
  const { data: dashboards } = await axiosInstance.get("/dashboards");
  return dashboards;
};

export const dashboards = [
  {
    id: 44,
    name: "Metaplex",
    href: "https://analytics.topledger.xyz/metaplex/public/dashboards/T50WQTTu2Cbz8hG0vge18izUO5ghEDrWhzb92knN",
    icon: "/assets/images/dashboards/metaplex.svg",
  },
  {
    id: 43,
    name: "Drift trade",
    href: "https://analytics.topledger.xyz/drift/public/dashboards/rZdEYeLBps0O2mIfcKalMYyWGyerHU4nFy4vIcuK",
    icon: "/assets/images/dashboards/drift logo.svg",
  },
  {
    id: 42,
    name: "Flash trade",
    href: "https://analytics.topledger.xyz/flashtrade/public/dashboards/4DRmM5D7aaKK20NFe9j8b7vuEYF8OyI7yrcf9Z2j",
    icon: "/assets/images/dashboards/flash trade.svg",
  },
  {
    id: 41,
    name: "Helium",
    href: "https://analytics.topledger.xyz/helium/public/dashboards/lAmbact4KjA6llkhKEPk6AVi9R8ZBQviPV0XPLLA",
    icon: "/assets/images/dashboards/helium.svg",
  },
  {
    id: 40,
    name: "Helium mobile subscribers",
    href: "https://analytics.topledger.xyz/helium/public/dashboards/81P8F2a40psaWv9qvVvcRuPErNeUgHClqmkuJtUo",
    icon: "/assets/images/dashboards/helium.svg",
  },
  {
    id: 35,
    name: "Phoenix",
    href: "https://analytics.topledger.xyz/tl/public/dashboards/knoPmkT1W0deT8txVQYw1daqqepjITZRZbvz1oft",
    icon: "/assets/images/dashboards/phoenix.svg",
  },
  {
    id: 34,
    name: "Token 22",
    href: "https://analytics.topledger.xyz/solana/public/dashboards/xUbfgtlKLRjCYIaQnJKe7ow9JNYzxkEoACxxB89a",
    icon: "/assets/images/dashboards/solana.svg",
  },
  {
    id: 22,
    name: "DEX ecosystem",
    href: "https://analytics.topledger.xyz/solana/public/dashboards/eAA9GoOGq8R4M3g4WTaD6OQMOdLWRPDYebWY0tpY",
    icon: "/assets/images/dashboards/solana.svg",
  },
  {
    id: 21,
    name: "NFT ecosystem",
    href: "https://analytics.topledger.xyz/solana/public/dashboards/C0Akx84ngP4mEK6XOnwXUbOhHI5aJfUaiDc2jxqW",
    icon: "/assets/images/dashboards/solana.svg",
  },
  {
    id: 20,
    name: "Drip",
    href: "https://analytics.topledger.xyz/tl/public/dashboards/7XqwqSZ3r7aYD5EVBwd67VHQ3Y1pXrq0agQptxuU",
    icon: "/assets/images/dashboards/drip logo.svg",
  },
  {
    id: 16,
    name: "Tensor",
    href: "https://analytics.topledger.xyz/tensor/public/dashboards/8JQea3zqnCIfMDkeW4pmVZ2pf0CmYraCF71XKjKV",
    icon: "/assets/images/dashboards/tensor logo.svg",
  },
  {
    id: 9,
    name: "Liquid staking",
    href: "https://analytics.topledger.xyz/tl/public/dashboards/1f5RBu3NSjEQFqOp7wcifeIYd432Uv1pG4Kk17aj",
    icon: "/assets/images/dashboards/solana.svg",
  },
];
