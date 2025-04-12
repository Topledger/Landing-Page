import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userWalletDashboards } from "constants/constants1";
import PasswordForm from "./PasswordForm";

const StateOfSolana1Redirect = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Clear any existing authentication to force password entry
      sessionStorage.removeItem("solana1-auth");
    }
  }, []);

  // Redirect after successful authentication
  useEffect(() => {
    if (isAuthenticated) {
      router.replace(
        `/solana/${userWalletDashboards[0].wallet_dashboard.slug}`
      );
    }
  }, [router, isAuthenticated]);

  // Return the password form until authenticated
  return <PasswordForm onAuthenticate={setIsAuthenticated} />;
};

export default StateOfSolana1Redirect;
