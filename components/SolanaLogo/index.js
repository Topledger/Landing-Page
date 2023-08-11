import React from "react";

import styles from "./index.module.scss";

function SolanaLogo({ inline }) {
  return (
    <img
      className={styles.solanaLogo}
      src="assets/images/solana.png"
      alt="solana"
    />
  );
}

export default SolanaLogo;
