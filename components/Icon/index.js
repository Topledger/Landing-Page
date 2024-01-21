import Image from "next/image";

const Icon = ({ className, style, name }) => {
  return (
    <Image
      className={className}
      style={style}
      src={`/assets/images/icons/${name}.svg`}
      width={24}
      height={24}
    />
  );
};

export default Icon;
