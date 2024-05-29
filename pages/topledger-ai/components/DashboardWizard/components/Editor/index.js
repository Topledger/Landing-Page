import { useCallback, useEffect, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import { format as formatter } from "sql-formatter";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import Button from "@/components/Button";
import NButton from "../Button";

import styles from "./index.module.scss";

const Editor = (props = {}) => {
  const { externalEditorLink } = props;
  const editorRef = useRef();

  const format = useCallback(() => {
    /** @type {import('react-ace').default */
    const rAce = editorRef.current;
    console.log("beautify", beautify);
    console.log("rAce", rAce);

    if (rAce?.editor?.session) {
      const editorSession = rAce?.editor?.session;
      console.log("editorSession.$modeId", editorSession.$modeId, formatter);
      if (formatter && editorSession.$modeId === "ace/mode/sql") {
        const newValue = formatter(editorSession.getValue(), {
          language: "trino",
          tabWidth: 2,
        });
        console.log("newValue", newValue);
        editorSession.setValue(newValue);
      } else if (beautify.beautify) {
        console.log("format code");
        beautify.beautify(editorSession);
      }
    }
  }, []);

  return (
    <div className={styles.editor}>
      <AceEditor
        theme="github_dark"
        {...props}
        enableLiveAutocompletion
        ref={editorRef}
      />
      <div className={styles.prettyBtn}>
        <NButton onClick={format}>Pretty</NButton>
      </div>
      {externalEditorLink && (
        <div className={styles.externalLink}>
          <Button.Link
            target="_blank"
            href={externalEditorLink}
            tertiary
            arrowOnHover
          >
            Edit
          </Button.Link>{" "}
        </div>
      )}
    </div>
  );
};

export default Editor;
