import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

import styles from "./index.module.scss";

const LoginButton = ({ onResponse }) => {
  const [dummyState, setDummyState] = useState(0);

  useEffect(() => {
    window.onSignIn = (googleUser) => {
      console.log("googleUser", googleUser);
      onResponse(googleUser);
    };

    return () => {
      window.onSignIn = null;
    };
  }, []);

  return (
    <div className={styles.loginButtonContainer}>
      <Head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>
      <div
        id="g_id_onload"
        data-client_id="207141075356-lkqlnpss1dehumiagg0nc5070kp75m0f.apps.googleusercontent.com"
        data-callback="onSignIn"
      ></div>
      <div className="g_id_signin" data-type="standard"></div>
    </div>
  );
};

const LoginContent = ({ onSuccess }) => {
  return (
    <div className={styles.loginContent}>
      <p>Illuminate Solana's data landscape</p>
      <p className="subHeading">with our AI-powered visualization tool</p>
      <LoginButton
        onResponse={(response) => {
          if (response?.credential) {
            onSuccess();
          }
        }}
      />
    </div>
  );
};

export default LoginContent;
