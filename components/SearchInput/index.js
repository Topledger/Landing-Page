import { forwardRef, useState } from "react";
import cx from "classnames";
import { BiSearch } from "react-icons/bi";

import styles from "./index.module.scss";

const SearchInput = forwardRef(
  (
    {
      className,
      onStateChange,
      onClick,
      onChange,
      placeholder = "Type something...",
      defaultFocused,
    },
    ref
  ) => {
    const [focused, setFocused] = useState(defaultFocused);

    const handleFocus = (e) => {
      setFocused(true);
      onStateChange({ focused: defaultFocused && true });
    };

    const handleBlur = (e) => {
      setFocused(false);
      onStateChange({ focused: defaultFocused && false });
    };

    return (
      <div
        className={cx(className, styles.searchInput, { focused })}
        ref={ref}
        onClick={onClick}
      >
        <BiSearch className={styles.icon} />
        <input
          className={styles.input}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

SearchInput.defaultProps = {
  onStateChange() {},
};

export default SearchInput;
