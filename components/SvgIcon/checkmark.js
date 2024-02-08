import * as React from "react";
const SvgComponent = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    width={24}
    height={24}
    {...props}
  >
    <g fill="none" stroke="#63B63C" strokeWidth={2}>
      <circle
        cx={77}
        cy={77}
        r={72}
        style={{
          strokeDasharray: "480,480",
          strokeDashoffset: 960,
        }}
      />
      <circle
        id="colored"
        cx={77}
        cy={77}
        r={72}
        fill="#63B63C"
        style={{
          strokeDasharray: "480,480",
          strokeDashoffset: 960,
        }}
      />
      <path
        stroke="#fff"
        strokeWidth={10}
        d="m43.5 77.8 20.2 20.1 48.5-48.5"
        className="st0"
        style={{
          strokeDasharray: "100,100",
          strokeDashoffset: 200,
        }}
      />
    </g>
  </svg>
);
export default SvgComponent;
