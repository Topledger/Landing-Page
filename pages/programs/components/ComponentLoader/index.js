import Image from "next/image";
import React from "react";

import styles from "./index.module.scss";

function Loader() {
  return (
    <div className={styles.tlDashboardsLoader}>
      <div className={styles.loadingIndicator}>
        <div id="shadow"></div>
        <Image
          id="css-logo"
          style={{ height: "0px" }}
          src="/assets/images/brand-logo.svg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default Loader;
