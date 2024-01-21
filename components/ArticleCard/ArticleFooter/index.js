import Button from "../../Button";
import styles from "./index.module.scss";

const ACTION_COMPONENT_TYPE_MAP = (type) => {
  switch (type) {
    case "button":
      return Button;
    case "link":
      return Button.Link;
    case "search":
      return Button.Search;
    default:
      return Button;
  }
};

const FooterAction = ({ action }) => {
  const ActionComponent = ACTION_COMPONENT_TYPE_MAP(action.type);
  return (
    <div>
      <ActionComponent
        primary={action.type !== "link"}
        href={action.href}
        target={action.target}
      >
        {action.text}
      </ActionComponent>
    </div>
  );
};

const FooterActions = ({ actions = [] }) => {
  return (
    <div className={styles.footer}>
      {actions.length > 0 &&
        actions.map((action) => (
          <FooterAction key={action.id} action={action} />
        ))}
    </div>
  );
};

export default FooterActions;
