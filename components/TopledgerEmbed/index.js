import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

import styles from "./index.module.scss";

const TopLedgerEmbed = forwardRef((props, ref) => {
  const { title, caption, embedUrl: url, height, width, params = {} } = props;
  const iframeRef = useRef();

  let embedUrl;

  const reloadIframe = useCallback(() => {
    iframeRef.current.src = embedUrl;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useImperativeHandle(
    ref,
    () => ({
      reloadIframe,
    }),
    [reloadIframe]
  );

  if (!url) return null;

  embedUrl = new URL(url);
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
        ref={iframeRef}
      ></iframe>
      <button className={styles.reloadBtn} onClick={reloadIframe}>
        ⟳
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
});

TopLedgerEmbed.displayName = "TopLedgerEmbed";

export default TopLedgerEmbed;
