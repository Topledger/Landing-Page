import React, { useRef } from "react";

import styles from "./index.module.scss";

export const TopLedgerEmbed = ({
  title,
  caption,
  embedUrl: url,
  height,
  width,
  params = {},
}) => {
  const iframeRef = useRef();

  if (!url) return null;
  const embedUrl = new URL(url);
  const searchParams = new URLSearchParams(embedUrl.search);

  searchParams.set("iframe", "true");
  searchParams.set("hide_header", "true");
  searchParams.set("hide_timestamp", "true");

  embedUrl.search = searchParams.toString();
  const reloadIframe = () => {
    iframeRef.current.src = embedUrl;
  };
  return (
    <figure className={`tlembed-wrapper ${styles.tlembedWrapper}`}>
      {title && <p>{title}</p>}
      <iframe
        src={embedUrl.toString()}
        width="720"
        height="391"
        className={styles.tlembed}
        style={{
          height,
          width,
        }}
        ref={iframeRef}
      ></iframe>
      <button className={styles.reloadBtn} onClick={reloadIframe}>
        ⟳
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
