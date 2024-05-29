import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Page from "@/components/Page";
import AiHeader from "./components/AiHeader";
import AiFooter from "./components/AiFooter";
import AiContent from "./components/AiContent";
import DataWizard from "./components/DataWizard";
import DashboardWizard from "./components/DashboardWizard";
import { useUser } from "providers/User";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSearchObject } from "helpers/utils";

const LoginContent = dynamic(() => import("./components/LoginContent"), {
  ssr: false,
});

const TopledgerAI = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { query } = useSearchObject();

  const handleLoginSuccess = (userData) => {
    console.log("handleLoginSuccess", userData);
    setUser(userData);
  };

  const setQuery = (query) => {
    const params = new URLSearchParams({ query });
    router.push({ query: params.toString() });
  };

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  return (
    <Page
      title="Top Ledger AI"
      header={false}
      footer={false}
      className={styles.body}
    >
      <AiHeader bottomBorder={!query} />
      <AiContent
        background={!isLoggedIn && "topledger-ai/login-background.svg"}
      >
        {!isLoggedIn && <LoginContent onSuccess={handleLoginSuccess} />}
        {isLoggedIn && !query && <DataWizard onQuery={setQuery} />}
        {isLoggedIn && query && <DashboardWizard />}
      </AiContent>
      <AiFooter />
    </Page>
  );
};

export default TopledgerAI;
