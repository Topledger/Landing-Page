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
      onEnter,
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

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && onEnter) {
        onEnter()
      }
    }

    return (
      <div
        className={cx(className, styles.searchInput, { focused })}
        ref={ref}
        onClick={onClick}
      >
        <span className={cx(styles.icon, "search-icon")}>
          <BiSearch />
        </span>
        <input
          className={styles.input}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleKeyDown}
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
