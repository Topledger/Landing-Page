import { useState } from "react";

import Page from "@/components/Page";
import AiHeader from "./components/AiHeader";
import AiFooter from "./components/AiFooter";
import AiContent from "./components/AiContent";

import styles from "./index.module.scss";
import DataWizard from "./components/DataWizard";
import dynamic from "next/dynamic";
import DashboardWizard from "./components/DashboardWizard";

const LoginContent = dynamic(() => import("./components/LoginContent"), {
  ssr: false,
});

const TopledgerAI = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState("");

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
        {!isLoggedIn && <LoginContent onSuccess={() => setIsLoggedIn(true)} />}
        {isLoggedIn && !query && <DataWizard onQuery={setQuery} />}
        {isLoggedIn && query && <DashboardWizard query={query} />}
      </AiContent>
      <AiFooter />
    </Page>
  );
};

export default TopledgerAI;
