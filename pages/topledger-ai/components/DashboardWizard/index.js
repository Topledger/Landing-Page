import { useState } from "react";
import { useQuery } from "react-query";

import DashboardArea from "./components/DashboardArea";
import DataWizardInput from "./components/DataWizardInput";
import { nlToSql } from "queries";

import styles from "./index.module.scss";

const DashboardWizard = ({ query: initialQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["nl-to-sql", query],
    () => nlToSql(query),
    {
      refetchOnWindowFocus: false,
    }
  );
  const embedUrl = data?.embedUrl;
  const sql = data?.sql;
  const visualizationConfig = data?.viz_config;

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
      {!isLoading && (
        <div className={styles.sql}>
          {sql && <pre>{sql}</pre>}
          {visualizationConfig && <pre>{visualizationConfig}</pre>}
        </div>
      )}
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
