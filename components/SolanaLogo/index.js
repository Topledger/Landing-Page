import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

function SolanaLogo({ inline }) {
  return (
    <Image
      className={styles.solanaLogo}
      src="assets/images/solana.png"
      alt="solana"
    />
  );
}

export default SolanaLogo;
