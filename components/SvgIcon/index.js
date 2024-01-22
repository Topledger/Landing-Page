import { ReactComponent as Chevron } from "@/assets/images/icons/chevron.svg";
import outArrow from "./out-arrow";
import ChevronLeft from "./chevron-left";

const IconMap = {
  chevron: Chevron,
  "out-arrow": outArrow,
  "chevron-left": ChevronLeft,
};

const SvgIcon = ({ name, ...props }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={24} height={24} {...props} />;
};

export default SvgIcon;
