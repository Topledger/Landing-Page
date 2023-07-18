import React from "react";
import { AiOutlineFontSize, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ backgroundColor: "#001C6587" }}>
        <div className="footerGrid">
          <div className="footerFlex">
            <div className="footerContent">
              <h1>Company</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/about-us/#team" scroll={false}>
                    Team
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://blogs.topledger.xyz"
                    rel="noreferrer"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footerContent">
              <h1>Product</h1>
              <ul>
                <li>
                  <Link href="/dashboards">Dashboards</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://docs.topledger.xyz"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContent"></div>
          <div className="footerContent">
            <div className="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.792023943601!2d103.85612611409186!3d1.2995912620984944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20Fraser%20Street%20%2305-25%20Duo%20Tower%2C%20Singapore!5e0!3m2!1sen!2sin!4v1659891206687!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="footerContent getTouch">
            <h1>Get in Touch</h1>
            <ul className="address">
              <li>
                <img draggable="false" src="assets/images/mail.svg" />
                <a href="mailto:nitin@topledger.xyz">nitin@topledger.xyz </a>
              </li>
              <li>
                <img draggable="false" src="assets/images/locat.svg" />
                Fraser Street #05-25 <br />
                Duo Tower, Singapore
              </li>
            </ul>
            <div className="socialIcons">
              <h1>Social</h1>
              <ul className="social">
                <li>
                  <a
                    title="telegram"
                    draggable="false"
                    href="https://telegram.me/ergon50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      draggable="false"
                      src="assets/images/telegram-footer.svg"
                      style={{ marginLeft: "-3px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="twitter"
                    draggable="false"
                    href="https://twitter.com/ledger_top"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      draggable="false"
                      src="assets/images/twitter-footer.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-border"></div>
      </div>
      <div style={{ backgroundColor: "#001C65" }}>
        <div className="last">
          {/* <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color:"rgba(255, 255, 255, 0.64)",
            fontSize:"16px", 
            fontWeight:"300",
          }}
        >
          Made with <img src="assets/images/heart.svg" /> in Bengaluru
        </p> */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img className="copy-ican" src="assets/images/copyright.svg" />
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.64)",
                fontWeight: "300",
              }}
            >
              Copyright, Top Ledger, 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
