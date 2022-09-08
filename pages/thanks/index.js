import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const thanks = () => {
  return (
    <>
      <div className={styles.demoMain}>
        <div className={styles.demoImg}>
          <img src="/assets/images/Group 19800.png" alt="about-solana" />
        </div>

        <div className={styles.mainThanks}>
          <div className={styles.thankYou}>
            <div className={styles.container}>
              <div className={styles.thanksHeading}>
                <h1>Thank you for requesting a demo! </h1>
                <p>Our team will get back to you within 24 hours!</p>
              </div>
              <Link href="/">
                <div className={styles.thanksText}>
                  <img src="/assets/images/shape.svg" alt="about-solana" />
                  <h6>
                    Back to <span className={styles.homeBack}>Home</span>
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <img
          className={styles.lastDemo}
          src="/assets/images/Group 19900.png"
          alt="about-solana"
        />
      </div>
    </>
  );
};
export default thanks;
