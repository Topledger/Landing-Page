import { useEffect } from "react";
import { useRouter } from "next/router";
import { userWalletDashboards } from "constants/constants";

const StateOfSolanaRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace(
            `/state-of-solana/${userWalletDashboards[0].wallet_dashboard.slug}`
        );
    }, [router]);

    return null;
};

export default StateOfSolanaRedirect;
