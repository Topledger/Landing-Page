import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = (props) => {
  return <AceEditor theme="github_dark" {...props} />;
};

export default Editor;
