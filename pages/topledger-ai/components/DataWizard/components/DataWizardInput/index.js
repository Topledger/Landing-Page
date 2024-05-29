import cx from "classnames";
import styles from "./index.module.scss";
import { Arrow } from "pages/home/components/DashboardList";
import { useState } from "react";

const DataWizardInput = ({ value, type, placeholder, onInput }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const handleInput = () => {
    onInput(text);
  };

  return (
    <div className={cx(styles.container, { focused })}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setText(event.target.value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleInput();
          }
        }}
      />
      <Arrow
        className={cx(styles.arrow, { focused })}
        text=""
        hoverEffect={false}
        onClick={handleInput}
      />
    </div>
  );
};

export default DataWizardInput;
