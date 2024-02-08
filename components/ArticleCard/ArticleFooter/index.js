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
  tertiary,
  ...props
} = {}) => {
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
        <Link {...props} color="#085ED4" primary={primary || (isSelected && secondary)} secondary={(!primary && !tertiary) || (secondary && !isSelected)}>
          {props.text}
        </Link>
      );
    case "search":
      return <Input.Search {...props} style={{ ...props?.style, width: "80%" }} color="#085ED4" primary/>;
    case "comingSoon":
      return (
        <Chip color="#59B077" {...props} style={{...props?.style, width: '100%', textAlign: 'center'}}>
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
