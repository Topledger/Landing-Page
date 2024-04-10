import React from "react";

import styles from "./index.module.scss";

export const TopLedgerEmbed = ({
  title,
  caption,
  embedUrl: url,
  height,
  width,
  params = {},
}) => {
  if (!url) return null;

  const embedUrl = new URL(url);
  const searchParams = new URLSearchParams(embedUrl.search);

  searchParams.set("iframe", "true");
  searchParams.set("hide_header", "true");
  searchParams.set("hide_timestamp", "true");

  embedUrl.search = searchParams.toString();

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
      ></iframe>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
