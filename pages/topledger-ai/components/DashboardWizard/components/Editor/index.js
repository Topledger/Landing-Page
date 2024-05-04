import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import Button from "@/components/Button";

import styles from "./index.module.scss";

const Editor = (props = {}) => {
  const { externalEditorLink } = props;

  return (
    <div className={styles.editor}>
      <AceEditor theme="github_dark" {...props} />
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
