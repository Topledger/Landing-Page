import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "../../context/DarkMode";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsTelegram, BsWhatsapp, BsLink45Deg } from "react-icons/bs";
import useComponentVisible from "../../hooks/useComponentVisible";

const List = ({data, isDarkMode}) => {

  const { ref, isComponentVisible , setIsComponentVisible} = useComponentVisible(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleMenu = () => {
      setIsComponentVisible((prev) => !prev);
    };

    return (
        <div className={styles.flexBox} ref={ref}>
              <div className={styles.info}>
                <a href={data?.link} target="_blank" rel="noreferrer">
                  <h4>{data?.title}</h4>
                  <p>{data?.text}</p>
                </a>
              </div>
              <div className={styles.fav}>
                <div className={styles.shareBtn}>
                <p onClick={() => toggleMenu()}>
                  <span>
                    {isDarkMode ? (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    ) : (
                      <AiOutlineShareAlt className={styles.shareIcon} />
                    )}
                    {/* <img src="/assets/star.svg" alt="star" /> */}
                  </span>
                  {data?.fav}
                </p>
                </div>
                {isComponentVisible && (
                  <div className={styles.shareDropdown}>
                  <div className={styles.wrapper}>
                    <div className={styles.icons}>
                      <a href="#">
                        <BsTwitter className={styles.twitter} />
                      </a>
                      <a href="#">
                        <BsTelegram className={styles.telegram} />
                      </a>
                      <a href="#">
                        <BsFacebook className={styles.facebook} />
                      </a>
                      <a href="#">
                        <BsWhatsapp className={styles.whatsapp} />
                      </a>
                    </div>
                    <div className={styles.copyLink}>
                      <BsLink45Deg />
                      <input type="text" className={styles.inputCopy} placeholder="https://www.kooapp.com/koo/kooenglish" />
                      <button type="button" className={styles.copyBtn}>Copy</button>
                    </div>
                  </div>
                </div>
                 )}
                
              </div>
              
            </div>
    )
};

export default List;