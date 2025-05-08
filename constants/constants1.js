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
      id: 3,
      title: "Stablecoins",
      slug: "stablecoins",
      org_slug: "solana",
      api_key: "lIPifHfQKMw851APma1MUmiGrB7uNvzxeGBR2REl",
    },
  },
  {
    wallet_dashboard: {
      id: 4,
      title: "DePin",
      slug: "depin",
      org_slug: "solana",
      api_key: "7wuFI8oAPv4UaMkh7BG3YcyQkvDqKh1TQDT3wqUK",
    },
  },
  {
    wallet_dashboard: {
      id: 5,
      title: "Treasury",
      slug: "treasury",
      org_slug: "solana",
      api_key: "nTSQtmqFcKhLsreo9gF7sy0FcIFtd59xDNH0tI7g",
    },
  },
  {
    wallet_dashboard: {
      id: 6,
      title: "Bitcoin on Solana",
      slug: "bitcoin-on-solana",
      org_slug: "solana",
      api_key: "kcUYPSHA5gSCYCi7Gs38kpVZ2Qg15NrtZMvLs9Q7",
    },
  },
  {
    wallet_dashboard: {
      id: 7,
      title: "VC funding",
      slug: "vc-funding",
      org_slug: "solana",
      api_key: "Xn47p6rXsTMStqr7xdyO4M7A03C8s1fyhpE6Mtta",
    },
  }


]; 
