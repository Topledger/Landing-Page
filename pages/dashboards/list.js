import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "../../context/DarkMode";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsWhatsapp,
  BsLink45Deg,
} from "react-icons/bs";
import useComponentVisible from "../../hooks/useComponentVisible";
import { MdDone, MdFacebook } from "react-icons/md";
import axios from "axios";

const List = ({ data, isDarkMode, fetchData }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsComponentVisible((prev) => !prev);
  };

  console.log("hellloo", { data });
  const handleShareUpdate = async () => {
    console.log("clicked data -------> ", data);
    try {
      const res = await axios.put(
        `https://top-ledger-panel.dishantagnihotri.com/api/dashboards/` +
          data?.id,
        { data: { shares: data?.attributes?.shares + 1 } }
      );
      if (res) {
        fetchData(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const [textCopy, setTextCopy] = useState(false);
  const copyToClipboard = () => {
    setTextCopy(true);
    navigator.clipboard.writeText(data?.attributes?.link);
    setTimeout(() => {setTextCopy(false); handleShareUpdate();}, 2000);
  };

  return (
    <div className={styles.flexBox} ref={ref}>
      <div className={styles.info}>
        <div
          onClick={() => onClick(data?.attributes?.link)}
          style={{ cursor: "pointer" }}
        >
          <h4>{data?.attributes?.title}</h4>
          <p>{data?.attributes.description}</p>
        </div>
      </div>
      <div className={styles.fav}>
        <div
          className={styles.shareBtn}
          style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative", zIndex: "1" }}
        >
          <p onClick={() => toggleMenu()}>
            {/* {isDarkMode ? (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    ) : (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    )} */}
            {/* <img src="/assets/star.svg" alt="star" /> */}
            <div className="ShareIcons">
              {isComponentVisible ? (
                <img src="assets/images/cross-small.svg" />
              ) : (
                <AiOutlineShareAlt className={styles.shareIcon} />
              )}
            </div>
          </p>
          <p>{data?.attributes?.shares} shares</p>
        </div>
        
          <div className={`${styles.shareDropdown} ${isComponentVisible ? " " : styles.animationDropDown}`}>
            <div className={styles.wrapper}>
              <div className={styles.icons}>
                {textCopy ? (
                  <span className={styles.copyText}>
                    <MdDone />
                    Copied to clipboard
                  </span>
                ) : (
                  <div style={{ display: "flex", gap: "20px" }}>
                    {/* <a
                      onClick={handleShareUpdate}
                      href={`https://discord.gg/share?text=${data?.attributes?.title}&url=${data?.attributes?.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="assets/images/logos_discord-icon.svg" />
                    </a> */}
                    <a
                      onClick={handleShareUpdate}
                      href={`https://twitter.com/share?text=${data?.attributes?.title}&url=${data?.attributes?.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <BsTelegram className={styles.telegram} /> */}
                      <img src="assets/images/logos_twitter-icon.svg" />
                    </a>
                    <a
                      onClick={handleShareUpdate}
                      href={`https://t.me/share/url?url=${data?.attributes?.link}&text=${data?.attributes?.title}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <BsFacebook className={styles.facebook} /> */}
                      <img src="assets/images/logos_telegram-icon.svg" />
                    </a>
                    {/* <a
                      onClick={handleShareUpdate}
                      href={`https://www.facebook.com/sharer/sharer.php?u=${data?.attributes?.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.facebook}
                    >
                      <MdFacebook />
                    </a> */}
                  </div>
                )}
                <span
                  onClick={copyToClipboard} className={textCopy && styles.copyIconHide}
                >
                  {/* <BsWhatsapp className={styles.whatsapp} /> */}
                  <img src="assets/images/copy.svg" />
                </span>
              </div>
              {/* <div className={styles.copyLink}>
                      <BsLink45Deg />
                      <input type="text" className={styles.inputCopy} placeholder="https://www.kooapp.com/koo/kooenglish" />
                      <button type="button" className={styles.copyBtn}>Copy</button>
                    </div> */}
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default List;
