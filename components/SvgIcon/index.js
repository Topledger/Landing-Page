import outArrow from "./out-arrow";
import ChevronLeft from "./chevron-left";
import DiamondBullet from "./diamond-bullet";
import User from "./user";
import Email from "./email";
import Company from "./company";
import Designation from "./designation";
import Checkmark from "./checkmark";

const IconMap = {
  "out-arrow": outArrow,
  "chevron-left": ChevronLeft,
  "diamond-bullet": DiamondBullet,
  user: User,
  email: Email,
  company: Company,
  designation: Designation,
  checkmark: Checkmark,
};

const SvgIcon = ({ name, ...props }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={24} height={24} {...props} />;
};

export default SvgIcon;
