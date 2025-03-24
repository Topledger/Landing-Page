import { userWalletDashboards } from "constants/constants";

const StateOfSolanaRedirect = () => {
    return null;
};

export async function getServerSideProps() {
    return {
        redirect: {
            destination: `/state-of-solana/${userWalletDashboards[0].wallet_dashboard.slug}`,
            permanent: false,
        },
    };
}

export default StateOfSolanaRedirect;
