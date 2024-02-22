import cx from "classnames";
import Image from "next/image";

import Button from "@/components/Button";

import styles from "./index.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.title}>Get in touch</div>
      </div>
      <div
        className={styles.row}
        style={{ borderBottom: "none", paddingTop: "24px", paddingBottom: 0 }}
      >
        {addressIcon}
        <Button.Link
          tertiary
          className={styles.mailLink}
          href="https://maps.app.goo.gl/UrpxLVteHYZJKVhUA"
          target="_blank"
          noArrow
        >
          Fraser Street #05-25 Duo Tower Singapore
        </Button.Link>
      </div>
      <div className={styles.row} style={{ paddingTop: 0, paddingBottom: "24px" }}>
        {mailIcon}
        <Button.Link
          href="mailto:nitin@topledger.xyz"
          tertiary
          className={styles.mailLink}
        >
          nitin@topledger.xyz
        </Button.Link>
      </div>
      <div className={cx(styles.row, styles.shareRow)}>
        <Button.Link
          href="https://telegram.me/ergon50"
          tertiary
          className={styles.shareLink}
          target="_blank"
          noArrow
        >
          <Image
            src="/assets/images/telegram-share.svg"
            width={40}
            height={40}
            alt="Telegram"
          />
        </Button.Link>
        <Button.Link
          href="https://twitter.com/ledger_top"
          tertiary
          className={styles.shareLink}
          target="_blank"
          noArrow
        >
          <Image
            src="/assets/images/twitter-share.svg"
            width={40}
            height={40}
            alt="Twitter"
          />
        </Button.Link>
      </div>
    </div>
  );
};

export default ContactUs;

const addressIcon = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="16" y="16" width="32" height="32" rx="16" fill="#20243D"/>
<path d="M26.8027 34C26.2922 34.3922 26 34.8476 26 35.3333C26 36.8061 28.6863 38 32 38C35.3137 38 38 36.8061 38 35.3333C38 34.8476 37.7078 34.3922 37.1973 34M32 28.3333V31.6667M30.3333 30H33.6667M36 30.1481C36 32.4391 34.2091 34.2963 32 35.3333C29.7909 34.2963 28 32.4391 28 30.1481C28 27.8572 29.7909 26 32 26C34.2091 26 36 27.8572 36 30.1481Z" stroke="#E0E1FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const mailIcon = (
  
 <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} fill="none">
    <g filter="url(#a)" transform="translate(0, 9)">
      <rect
        width={32}
        height={32}
        x={16}
        y={8}
        fill="#26284B"
        rx={16}
        shapeRendering="crispEdges"
      />
      <path
        stroke="#E0E1FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.195 19.529a.665.665 0 0 1 .472-.196h10.666c.184 0 .351.075.472.196m-11.61 0a.664.664 0 0 0-.195.47v8c0 .37.299.668.667.668h10.666A.667.667 0 0 0 38 28v-8a.664.664 0 0 0-.195-.471m-11.61 0 4.862 4.861c.52.521 1.365.521 1.886 0l4.862-4.861"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={64}
        height={64}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.4533 0 0 0 0 0.583972 0 0 0 0 0.77998 0 0 0 0.16 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_20_267" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_20_267"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
