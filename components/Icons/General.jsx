const General = ({
  primary = "#EEF2FC",
  secondary = "#1A3989",
  tertiaryColor = "#001A72",
  ...props
}) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={2} y={1} width={32} height={32} rx={16} fill={secondary} />
      <path
        opacity={0.15}
        d="M23.833 23.667V14.5H12.167v9.167h11.666Z"
        fill={tertiaryColor}
      />
      <path
        d="M16.334 17.333a.5.5 0 1 0 0 1v-1Zm3.333 1a.5.5 0 1 0 0-1v1Zm4.166 5.334v.5a.5.5 0 0 0 .5-.5h-.5Zm-11.666 0h-.5a.5.5 0 0 0 .5.5v-.5Zm4.167-5.334h3.333v-1h-3.334v1Zm7-3.833v9.167h1V14.5h-1Zm.5 8.667H12.167v1h11.667v-1Zm-11.167.5V14.5h-1v9.167h1Zm-.5-12.834h11.667v-1H12.167v1Zm12 .334v2.5h1v-2.5h-1ZM23.833 14H12.168v1h11.667v-1Zm-12-.333v-2.5h-1v2.5h1Zm.334.333a.333.333 0 0 1-.333-.333h-1c0 .736.596 1.333 1.333 1.333v-1Zm12-.333c0 .184-.15.333-.334.333v1c.737 0 1.334-.597 1.334-1.333h-1Zm-.334-2.834c.185 0 .334.15.334.334h1c0-.737-.597-1.334-1.334-1.334v1Zm-11.666-1c-.737 0-1.333.597-1.333 1.334h1c0-.184.149-.334.333-.334v-1Z"
        fill={primary}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.103854 0 0 0 0 0.224896 0 0 0 0 0.536146 0 0 0 0.38 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1591_567"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1591_567"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default General;
