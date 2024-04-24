import { useEffect, useState } from "react";
import Head from "next/head";

import styles from "./index.module.scss";

/**
 * @typedef {{
 * iss: string;
 * azp: string;
 * aud: string;
 * sub: string;
 * email: string;
 * email_verified: boolean;
 * nbf: number;
 * name: string;
 * picture: string;
 * given_name: string;
 * family_name: string;
 * iat: number;
 * exp: number;
 * jti: string;
 * }} GoogleUser
 */

const LoginButton = ({ onResponse }) => {
  const [dummyState, setDummyState] = useState(0);

  useEffect(() => {
    window.onSignIn = (googleUser) => {
      console.log("googleUser", googleUser);
      const credential = googleUser.credential;
      if (credential) {
        /** @type {GoogleUser} */
        const userData = JSON.parse(atob(credential.split(".")[1]));
        onResponse(userData);
      } else {
        onResponse(null);
      }
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
      <p>{"Illuminate Solana's data landscape"}</p>
      <p className="subHeading">with our AI-powered visualization tool</p>
      <LoginButton
        onResponse={(response) => {
          if (response) {
            onSuccess(response);
          }
        }}
      />
    </div>
  );
};

export default LoginContent;
