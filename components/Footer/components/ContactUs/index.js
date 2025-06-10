import cx from "classnames";
import Image from "next/image";

import Button from "@/components/Button";

import styles from "./index.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Get in touch</h3>

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <Button
            tertiary
            className={styles.contactLink}
            href="https://maps.app.goo.gl/UrpxLVteHYZJKVhUA"
            target="_blank"
            noArrow
          >
            <div className={styles.companyName}>Donna Analytics Pvt Ltd</div>
          </Button>
          <div className={styles.companyDetails}>CIN: U72200RJ2022PTC082273</div>
          <div className={styles.companyDetails}>GSTIN: 08AAJCD3910G1ZT</div>
        </div>

        <div className={styles.contactItem}>
          <Button.Link
            href="mailto:nitin@topledger.xyz"
            tertiary
            className={styles.contactLink}
          >
            nitin@topledger.xyz
          </Button.Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const addressIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32">
    <rect width={32} height={32} fill="#C3D1F3" rx={8} />
    <path
      stroke="#1a3989"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.803 18c-.51.392-.803.848-.803 1.333C10 20.806 12.686 22 16 22s6-1.194 6-2.667c0-.485-.292-.94-.803-1.333M16 12.333v3.334M14.333 14h3.334m2.333.148c0 2.291-1.79 4.148-4 5.185-2.21-1.037-4-2.894-4-5.185C12 11.858 13.79 10 16 10s4 1.857 4 4.148Z"
    />
  </svg>
);

const mailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32">
    <rect width={32} height={32} fill="#C3D1F3" rx={8} />
    <path
      stroke="#1a3989"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.195 11.529a.665.665 0 0 1 .472-.196h10.666c.184 0 .351.075.472.196m-11.61 0a.664.664 0 0 0-.195.47v8c0 .37.299.668.667.668h10.666A.667.667 0 0 0 22 20v-8a.664.664 0 0 0-.195-.471m-11.61 0 4.862 4.861c.52.521 1.365.521 1.886 0l4.862-4.861"
    />
  </svg>
);
