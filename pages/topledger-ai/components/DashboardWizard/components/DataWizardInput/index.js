import cx from "classnames";
import styles from "./index.module.scss";
import { Arrow } from "pages/home/components/DashboardList";
import { useState } from "react";

const DataWizardInput = ({
  initialQuery,
  onChange,
  type,
  placeholder,
  className,
}) => {
  const [text, setText] = useState(initialQuery);
  const [focused, setFocused] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onChange(text);
    }
  };

  return (
    <div className={cx(styles.container, className, { focused })}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onKeyDown={handleKeyDown}
      />
      <Arrow
        className={cx(styles.arrow, { focused })}
        text=""
        hoverEffect={false}
        onClick={() => {
          onChange(text);
        }}
      />
    </div>
  );
};

export default DataWizardInput;
