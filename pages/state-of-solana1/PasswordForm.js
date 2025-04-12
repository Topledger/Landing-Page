import React, { useState, useEffect } from "react";
import styles from "./state-of-solana1.module.scss";
import Page from "@/components/Page";
import Head from "next/head";
//import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

const PasswordForm = ({ onAuthenticate }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogout, setIsLogout] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check if this is coming from a logout action
  useEffect(() => {
    if (typeof window !== "undefined") {
      const logoutParam = new URLSearchParams(window.location.search).get("logout");
      setIsLogout(logoutParam === "true");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password for state-of-solana1 pages
    const correctPassword = "solana123";

    if (password === correctPassword) {
      // Store authentication in sessionStorage
      if (typeof window !== "undefined") {
        sessionStorage.setItem("solana1-auth", "true");
      }
      onAuthenticate(true);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Page theme="dark" footer={false} header={false}>
      <Head>
        <title>Top Ledger - State of Solana1 - Password Protected</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <AppHeader pageType="wide" />

      <div className={styles.passwordHero}>
        <div className={styles.passwordContainer}>
          <div className={styles.passwordFormWrapper}>
            <div className={styles.logoContainer}>
              <div className={styles.logoBackground}>
                <i className="fas fa-lock" aria-hidden="true"></i>
              </div>
            </div>

            <h1 className={styles.passwordTitle}>State of Solana1</h1>

            {isLogout && (
              <div className={styles.logoutMessageContainer}>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <p className={styles.logoutMessage}>You have been successfully logged out.</p>
              </div>
            )}

            <p className={styles.passwordText}>
              This content is password protected. Please enter the password to continue.
            </p>

            <form onSubmit={handleSubmit} className={styles.passwordForm}>
              <div className={styles.inputGroup}>
                <div className={styles.passwordInputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className={styles.passwordInput}
                    aria-label="Password input"
                  />
                  <button
                    type="button"
                    className={styles.togglePasswordButton}
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <button type="submit" className={styles.passwordButton}>
                <span>Access Dashboard</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>

            {error && (
              <div className={styles.errorContainer}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <p className={styles.passwordError}>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background-color: #121212;
        }
      `}</style>
      {/* <AppFooter /> */}
    </Page>
  );
};

export default PasswordForm; 