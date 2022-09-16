import React from "react";
import styles from "./index.module.css";

function CommunitySection() {
  return (
    <>
      <section className={styles.CommunitySection}>
        <div className={styles.content}>
          <p>Join the community</p>
        </div>
        <div className={styles.btnContent}>
          <div className={styles.flexBox}>
            <div className={styles.flex}>
              <div className={styles.icon}>
                <img src="/assets/discord-new.svg" alt="discord" />
              </div>
              <div className={styles.info}>
                <h4>Discord</h4>
                <p>Join our discord Server here</p>
                <a href="https://discord.gg/x3EYAHYP" target="_blank" rel="noreferrer">
                  Join now{" "}
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5448 3.18568L1.53191 8.89057M10.5448 3.18568L9.3043 8.70484M10.5448 3.18568L5.02563 1.94518"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles.flex}>
              <div className={styles.icon}>
                <img src="/assets/twitter-new.svg" alt="discord" />
              </div>
              <div className={styles.info}>
                <h4>Twitter</h4>
                <p>Follow us on twitter to get all the latest updates</p>
                <a href="https://twitter.com/ledger_top" target="_blank" rel="noreferrer">
                  Join now{" "}
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5448 3.18568L1.53191 8.89057M10.5448 3.18568L9.3043 8.70484M10.5448 3.18568L5.02563 1.94518"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommunitySection;
