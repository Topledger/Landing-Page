import Image from "next/image";

const Icon = ({ className, style, name, height, width, ...props }) => {
  return (
    <Image
      {...props}
      className={className}
      style={style}
      src={`/assets/images/icons/${name}.svg`}
      width={width ?? 24}
      height={height ?? 24}
      alt={`${name} icon`}
    />
  );
};

export default Icon;
