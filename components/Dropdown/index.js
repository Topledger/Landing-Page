import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

import styles from "./index.module.scss";

const Dropdown = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: 10,
          },
        },
      ],
    }
  );

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (
        isOpen &&
        referenceElement &&
        popperElement &&
        !referenceElement?.contains(e.target) &&
        !popperElement?.contains(e.target)
      ) {
        close();
      }
    };

    const handleKeyDown = (e) => {
      if (isOpen && e.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleMouseDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isOpen, referenceElement, popperElement]);

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        ref={setReferenceElement}
        onClick={toggle}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={{ ...popperStyles.popper, zIndex: 1000 }}
          {...attributes.popper}
          className={styles.dropdown}
        >
          {content(close)}
        </div>
      )}
    </>
  );
};

export default Dropdown;
