import { useState } from "react";
import cx from "classnames";
import { BiSearch } from "react-icons/bi";

import styles from "./index.module.scss";

function SearchInput({
  className,
  onStateChange,
  placeholder = "Type something...",
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
    onStateChange({ focused: true });
  };

  const handleBlur = (e) => {
    setFocused(false);
    onStateChange({ focused: false });
  };

  return (
    <div className={cx(className, styles.searchInput, { focused })}>
      <BiSearch className={styles.icon} />
      <input
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
}

SearchInput.defaultProps = {
  onStateChange() {},
};

export default SearchInput;
