import cx from "classnames";

import Input from "@/components/Input";
import Chip from "@/components/Chip";
import Button from "../../Button";

import styles from "./index.module.scss";

const { Link } = Button;

export const getAction = ({
  type,
  isSelected,
  primary,
  secondary,
  ...props
}) => {
  switch (type) {
    case "button":
      return (
        <Link
          {...props}
          primary={primary || (isSelected && secondary)}
          secondary={secondary && !isSelected}
          href={props.href}
          target={props.target}
          color="#085ED4"
        >
          {props.text}
        </Link>
      );
    case "link":
      return (
        <Link {...props} color="#085ED4">
          {props.text}
        </Link>
      );
    case "search":
      return <Input.Search {...props} style={{ width: "80%" }} />;
    case "comingSoon":
      return (
        <Chip color="#59B077" {...props}>
          Coming Soon
        </Chip>
      );
    default:
      return <Button {...props} />;
  }
};

const FooterAction = ({ action }) => {
  return getAction(action);
};

const FooterActions = ({ actions = [] }) => {
  return (
    <div className={cx(styles.footer, styles.footerAction)}>
      {actions.length > 0 &&
        actions.map((action) => (
          <FooterAction key={action.id} action={action} />
        ))}
    </div>
  );
};

export default FooterActions;
