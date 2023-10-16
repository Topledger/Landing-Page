import Image from "next/image";
import styles from "./index.module.scss";

const AddToChromeButton = () => {
  return (
    <span
      className={styles.addToChrome}
      onClick={() =>
        window.open(
          "https://chrome.google.com/webstore/detail/top-ledger-end-to-end-blo/nkinmfenfjlhhaphmdmnjejcacaebmbd",
          "_blank"
        )
      }
    >
      <Image
        width={30}
        height={25}
        src="/assets/images/chrome-store.png"
        alt="Chrome Store"
      />
      <span className="btn-text">Add to Chrome</span>
    </span>
  );
};

export const ChromeExtensionSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h3>Chrome Extension</h3>
        <p>
          Access deeper and actionable insights about your project from
          alternative data sources like Twitter, Telegram & Discord. Access
          deeper and actionable insights about your project from alternative
          data sources like Twitter, Telegram & Discord.
        </p>
        <p style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <AddToChromeButton />
        </p>
      </div>
      <div className={styles.imageSection}>
        <Image
          className="chrome-extension-ss"
          width={705}
          height={395}
          layout="responsive"
          src="/assets/images/chrome-extension-0.5x.webp"
          alt="Chrome Extension"
        />
      </div>
    </section>
  );
};
