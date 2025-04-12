export const SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";

export const DASHBOARDS = {
  programs: {
    client: "tl",
    token: "oIEupNW8g4Ua9C64JvUsYRLNlOZej940x341KaAH",
    adddressParamName: "Program Address",
    title: "Solana Program",
  },
  wallet: {
    client: "tl",
    token: "T36Gx8PC8nZtot8jqIbM8yMU1l2ZjvCltXs2MLY5",
    adddressParamName: "wallet address",
    title: "Solana Wallet",
  },
  token: {
    client: "tl",
    token: "NECxpxtYkwl4p3AnXN8pUEZpdy57h8jO0xADB3PZ",
    adddressParamName: "token  mint",
    title: "Solana Token",
  },
};

export const DASHBOARD_PARAM_MAPPING = Object.keys(DASHBOARDS).reduce(
  (obj, type) => ({
    ...obj,
    [DASHBOARDS[type].adddressParamName]: DASHBOARDS[type],
  }),
  {}
);

export const PARAMETER_NAMES = Object.keys(DASHBOARDS).map(
  (type) => DASHBOARDS[type].adddressParamName
);

export const userWalletDashboards = [
  {
    wallet_dashboard: {
      id: 1,
      title: "Overview",
      slug: "Overview",
      org_slug: "solana",
      api_key: "AXa6aNn8xxDCpyOXBx0cnRsKeh1HrBHNBZJcu6Ey",
    },
  },
  {
    wallet_dashboard: {
      id: 2,
      title: "DeFi",
      slug: "defi",
      org_slug: "solana",
      api_key: "ki4DB7bcnJ220DldCa1R7UE8rp8iBGiRtpJMcd2U",
    },
  },
  {
    wallet_dashboard: {
      id: 1,
      title: "Stablecoins",
      slug: "stablecoins",
      org_slug: "solana",
      api_key: "lIPifHfQKMw851APma1MUmiGrB7uNvzxeGBR2REl",
    },
  },


]; 