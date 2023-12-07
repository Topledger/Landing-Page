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

export default {
  DASHBOARDS,
  DASHBOARD_PARAM_MAPPING,
  PARAMETER_NAMES,
};
