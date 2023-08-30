import { createPortal } from "react-dom";

const Portal = ({ children, container }) => {
  return document.body ? (
    createPortal(children, container ?? document.body)
  ) : (
    <></>
  );
};

Portal.defaultProps = {
  container: null,
};

export default Portal;
