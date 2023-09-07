import { createPortal } from "react-dom";

const Portal = ({ children, container }) => {
  return container ? createPortal(children, container) : <></>;
};

Portal.defaultProps = {
  container: null,
};

export default Portal;
