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
            org_slug: "tl",
            api_key: "qHYfENbrNsR2vbYNteodbaRQ8R7m7BE7DVCFvEm0",
        },
    },

    {
        wallet_dashboard: {
            id: 2,
            title: "DEX",
            slug: "dex",
            org_slug: "tl",

            api_key: "Jix7XZI0p41oMZ7pEVhcW1vCydMvgIsdy5Q7ma4D",
        },
    },

    {
        wallet_dashboard: {
            id: 3,
            title: "REV",
            slug: "rev",
            org_slug: "tl",
            api_key: "0Cm9R8K8xu4vq93Ljb88UJDtWr6jwTM1V9AGMQQo",
        },
    },
    {
        wallet_dashboard: {
            id: 4,
            title: "Block Rewards",
            slug: "block-rewards",
            org_slug: "tl",
            api_key: "JHrjYsFXzCEcSgpBS6RCCpZqV6dQMCKyn3sgGJon",
        },
    },
    {
        wallet_dashboard: {
            id: 5,
            title: "Compute Units & Txn Bytes",
            slug: "compute-units-txn-bytes",
            org_slug: "tl",
            api_key: "uPoqbyKQtsQ8Mt1YVxX11Idom5DEbDIZBI7L6hii",
        },
    },
    {
        wallet_dashboard: {
            id: 6,
            title: "Stablecoins",
            slug: "stable-coins",
            org_slug: "tl",
            api_key: "ZYGNI0Jz37axTytOosS7qeIurtaXpQZPhx2WZQyc",
        },
    },
];
