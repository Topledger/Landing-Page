// components/AnnouncementBand.js
import React from "react";
import QueryFormModal from "./QueryForm/QueryFormModal";
import { BoldOutlined } from "@ant-design/icons";

const AnnouncementBand = () => {
  return (
    <div style={styles.band}>
      Real time solana data streams to create trading platforms like GMGM.{" "}
      <a onClick={() => QueryFormModal.show()} style={{ cursor: 'pointer', ...styles.link }}>
        Contact
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
