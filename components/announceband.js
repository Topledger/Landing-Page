// components/AnnouncementBand.js
import React from "react";
import QueryFormModal from "./QueryForm/QueryFormModal";
import { BoldOutlined } from "@ant-design/icons";

const AnnouncementBand = () => {
  return (
    <div style={styles.band}>
      Top Ledger APIs are live.{" "}
      <a style={styles.link} href="https://api.topledger.xyz" target="_blank" rel="noreferrer" >
        Check it out.
      </a>
    </div>
  );
};

const styles = {
  band: {
    backgroundColor: "#2c67f2",
    color: "#ffffff",
    textAlign: "center",
    padding: "12px 20px",
    fontSize: "14px",
    letterSpacing: "0.5px",
    //fontWeight: "",
  },
  link: {
    color: "#FFC0A6",
    textDecoration: "none",
    fontWeight: "",
  },
};

export default AnnouncementBand;
