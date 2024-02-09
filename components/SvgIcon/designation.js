import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#374151"
        d="M9.498 9.785c2.154 0 3.9-1.742 3.9-3.892A3.896 3.896 0 0 0 9.498 2a3.896 3.896 0 0 0-3.9 3.893 3.896 3.896 0 0 0 3.9 3.892ZM9.5 10.253C5.912 10.253 3 13.107 3 17h13c0-3.893-2.912-6.747-6.5-6.747Z"
      />
      <path
        fill="#FDFDFF"
        stroke="#374151"
        d="M9.995 10.904a.52.52 0 0 0-.99 0l-.879 2.705H5.282a.52.52 0 0 0-.306.941l2.301 1.672-.879 2.705a.52.52 0 0 0 .8.582l-.29-.4.29.4L9.5 17.837l2.301 1.672a.52.52 0 0 0 .8-.582l-.879-2.705 2.302-1.672a.52.52 0 0 0-.306-.94h-2.844l-.88-2.706Zm-.038.309Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
