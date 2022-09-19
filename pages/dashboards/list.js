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

const List = ({ data, isDarkMode }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsComponentVisible((prev) => !prev);
  };

  console.log({ data });

  const onClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.flexBox} ref={ref}>
      <div className={styles.info}>
        <div onClick={() => onClick(data?.attributes?.link)}>
          <h4>{data?.attributes?.title}</h4>
          <p>{data?.attributes.description}</p>
        </div>
      </div>
      <div className={styles.fav}>
        {/* <div className={styles.shareBtn}>
          <p onClick={() => toggleMenu()}> */}
        {/* {isDarkMode ? (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    ) : (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    )} */}
        {/* <img src="/assets/star.svg" alt="star" /> */}
        {/* <div className="ShareIcons">
              {isComponentVisible ? (
                <img src="assets/images/cross-small.svg" />
              ) : (
                <AiOutlineShareAlt className={styles.shareIcon} />
              )}
            </div> */}
        {/* {data?.attributes?.shares} shares */}
        {/* </p> */}
        {/* </div> */}
        {isComponentVisible && (
          <div className={styles.shareDropdown}>
            <div className={styles.wrapper}>
              <div className={styles.icons}>
                <a href="#">
                  {/* <BsTwitter className={styles.twitter} /> */}
                  <img src="assets/images/logos_discord-icon.svg" />
                </a>
                <a href="#">
                  {/* <BsTelegram className={styles.telegram} /> */}
                  <img src="assets/images/logos_twitter-icon.svg" />
                </a>
                <a href="#">
                  {/* <BsFacebook className={styles.facebook} /> */}
                  <img src="assets/images/logos_telegram-icon.svg" />
                </a>
                <a href="#">
                  {/* <BsWhatsapp className={styles.whatsapp} /> */}
                  <img src="assets/images/copy.svg" />
                </a>
              </div>
              {/* <div className={styles.copyLink}>
                      <BsLink45Deg />
                      <input type="text" className={styles.inputCopy} placeholder="https://www.kooapp.com/koo/kooenglish" />
                      <button type="button" className={styles.copyBtn}>Copy</button>
                    </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
