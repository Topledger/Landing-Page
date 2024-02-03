import ReactDom from "react-dom";

import Card from "../Card";
import styles from "./index.module.scss";

const Modal = ({ children, onShadowClick }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.shadow} onClick={onShadowClick}></div>
      <Card className={styles.modal}>{children}</Card>
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
  let modalRoot = null;

  function init() {
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = `modal-root-${name}`;
      document.body.append(modalRoot);
    }
  }

  Component.show = (props) => {
    init();
    ReactDom.unmountComponentAtNode(modalRoot);
    lockBackgroundScroll();
    ReactDom.render(
      <Modal onShadowClick={Component.hide}>
        <Component {...props} />
      </Modal>,
      modalRoot
    );
  };
  Component.hide = () => {
    init();
    ReactDom.unmountComponentAtNode(modalRoot);
    unlockBackgroundScroll();
  };

  return Component;
};

export default Modal;
