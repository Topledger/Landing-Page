import { useState } from "react";
import { useQuery } from "react-query";

import DashboardArea from "./components/DashboardArea";
import DataWizardInput from "./components/DataWizardInput";
import { nlToSql } from "queries";

import styles from "./index.module.scss";

const DashboardWizard = ({ query: initialQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  const {
    data: embedUrl,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery(["nl-to-sql", query], () => nlToSql(query), {
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.wizardContent}>
      <h2 className={styles.input}>
        <DataWizardInput
          initialQuery={query}
          className={styles.wizardInput}
          placeholder="Ask something"
          onChange={(text) => {
            if (text === query) {
              refetch();
            } else {
              setQuery(text);
            }
          }}
        />
      </h2>
      <div className={styles.dashboard}>
        <DashboardArea
          isLoading={isLoading || isRefetching}
          embedUrl={embedUrl}
        />
      </div>
    </div>
  );
};

export default DashboardWizard;
