import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

import DashboardArea from "./components/DashboardArea";
import DataWizardInput from "./components/DataWizardInput";
import { nlToSql, updateSQL, updateVisualization } from "queries";

import styles from "./index.module.scss";
import Editor from "./components/Editor";

const DashboardWizard = ({ query: initialQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  const [updatedSql, setUpdatedSql] = useState();
  const [lastUpdatedSQL, setLastUpdatedSQL] = useState();
  const [updatedVizConfig, setVizConfig] = useState();
  const [lastUpdatedVizConfig, setLastUpdatedVizConfig] = useState();
  const [jsonAnnotations, setJsonAnnotations] = useState();

  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["nl-to-sql", query],
    () => {
      return nlToSql(query);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const sqlMutation = useMutation(async ({ queryId, sqlQuery }) => {
    await updateSQL(queryId, sqlQuery);
    setLastUpdatedSQL(sqlQuery);
  });
  const vizMutation = useMutation(async ({ vizId, config }) => {
    await updateVisualization(vizId, JSON.parse(config));
    setLastUpdatedVizConfig(config);
  });
  const embedUrl = data?.embedUrl;
  const sql = data?.sql;
  const visualizationConfig = data?.viz_config;
  const queryId = data?.queryId;
  const vizId = data?.vizId;

  useEffect(() => {
    setUpdatedSql(sql);
    setLastUpdatedSQL(sql);
    setVizConfig(visualizationConfig);
    setLastUpdatedVizConfig(visualizationConfig);
    setJsonAnnotations([]);
  }, [sql, visualizationConfig]);

  useEffect(() => {
    if (updatedVizConfig) {
      try {
        JSON.parse(updatedVizConfig);
        setJsonAnnotations([]);
      } catch (error) {
        const errorType = "SyntaxError";
        const { line, column } =
          /line (?<line>\d+) column (?<column>\d+)/.exec(error?.message)
            ?.groups ?? {};
        setJsonAnnotations([
          {
            type: "error",
            row: Number(line) - 1,
            column: Number(column) - 1,
            text: `${errorType}: ${error?.message}`,
          },
        ]);
      }
    }
  }, [updatedVizConfig]);

  const sqlChanged = lastUpdatedSQL !== updatedSql;
  const vizConfigChanged = lastUpdatedVizConfig !== updatedVizConfig;

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
      {!isLoading && !isRefetching && (
        <div className={styles.sql}>
          {sql && (
            <Editor
              mode="sql"
              value={updatedSql}
              onChange={setUpdatedSql}
              onLoad={(editor) => {
                editor.renderer.setPadding(10);
                editor.renderer.setScrollMargin(10);
              }}
            />
          )}
          {sqlChanged && (
            <button
              disabled={sqlMutation.isLoading}
              className={styles.updateSqlBtn}
              onClick={() =>
                sqlMutation.mutate({ queryId, sqlQuery: updatedSql })
              }
            >
              Update SQL
            </button>
          )}
          {visualizationConfig && (
            <Editor
              mode="json"
              value={updatedVizConfig}
              onChange={setVizConfig}
              annotations={jsonAnnotations}
              onLoad={(editor) => {
                editor.renderer.setPadding(10);
                editor.renderer.setScrollMargin(10);
              }}
            />
          )}
          {vizConfigChanged && (
            <button
              disabled={vizMutation.isLoading || jsonAnnotations?.length}
              className={styles.updateVizConfigBtn}
              onClick={() =>
                vizMutation.mutate({ vizId, config: updatedVizConfig })
              }
            >
              Update Config
            </button>
          )}
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
