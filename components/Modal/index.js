import ReactDom from "react-dom";

import Card from "../Card";
import styles from "./index.module.scss";
import { createRoot } from "react-dom/client";

const Modal = ({ children, onShadowClick }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.shadow} onClick={onShadowClick}></div>
      <Card className={styles.modal} contentClassName={styles.modalContent}>{children}</Card>
    </div>
  );
};

export const lockBackgroundScroll = () => {
  document.body.style.overflow = "hidden";
};

export const unlockBackgroundScroll = () => {
  document.body.style.overflow = "auto";
};

export const WrapModal = (name, Component) => {
  /** @type {ReturnType<typeof createRoot>>} */
  let root = null;

  function init() {
    if (!root) {
      const div = document.createElement("div");
      div.id = `modal-root-${name}`;
      document.body.append(div);
      root = createRoot(div);
    }
  }

  Component.show = (props) => {
    init();
    root.render(null);
    lockBackgroundScroll();
    root.render(
      <Modal onShadowClick={Component.hide}>
        <Component {...props} />
      </Modal>
    );
  };
  Component.hide = () => {
    init();
    root.render(null);
    unlockBackgroundScroll();
  };

  return Component;
};

export default Modal;
