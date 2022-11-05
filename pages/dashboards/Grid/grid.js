import React, { useContext, useState } from "react";
import styles from "../index.module.css";
import { BsLink45Deg } from "react-icons/bs";
import { MdDone, MdFacebook } from "react-icons/md";
import axios from "axios";
import useComponentVisible from "../../../hooks/useComponentVisible";

const Grid = ({ data, isDarkMode, fetchData, fetchAllDashboards }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsComponentVisible((prev) => !prev);
  };

  const handleShareUpdate = async () => {
    try {
      const res = await axios.put(
        `https://top-ledger-panel.dishantagnihotri.com/api/dashboards/` +
          data?.id,
        { data: { shares: data?.attributes?.shares + 1 } }
      );
      if (res) {
        fetchData(false);
        fetchAllDashboards(false);
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
    setTimeout(() => {
      setTextCopy(false);
      handleShareUpdate();
    }, 2000);
  };

  return (
    <div className={`${styles.flexBox} ${styles.blackBgLayout}`} ref={ref}>
      <div className={`${styles.info} ${styles.infoText}`}>
        <div
          onClick={() => onClick(data?.attributes?.link)}
          style={{ cursor: "pointer" }}
        >
          <h4>{data?.attributes?.title}</h4>

          <p>{data?.attributes?.description}</p>
        </div>
      </div>
      <div className={styles.fav}>
        {/* <div
          className={styles.shareBtn}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
            zIndex: "1",
          }}
        >
          {isComponentVisible ? "" : <p>{data?.attributes?.shares}</p>}

          <p>
            <div className="ShareIcons">
              {isComponentVisible ? (
                <img
                  src="assets/images/cross-small.svg"
                  onClick={() => toggleMenu()}
                />
              ) : (
                <AiOutlineShareAlt
                  className={styles.shareIcon}
                  onClick={() => toggleMenu()}
                />
              )}
            </div>
          </p>
        </div> */}

        {/* <div
          className={`${styles.shareDropdown} ${
            isComponentVisible ? " " : styles.animationDropDown
          }`}
        >
          <div className={styles.wrapper}> */}
        {/* <div className={styles.icons}>
              {textCopy ? (
                <span className={styles.copyText}>
                  <MdDone />
                  Copied to clipboard
                </span>
              ) : (
                <div style={{ display: "flex", gap: "20px" }}>
                  <a
                    title="twitter"
                    onClick={handleShareUpdate}
                    href={`https://twitter.com/share?text=${data?.attributes?.title}&url=${data?.attributes?.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="assets/images/logos_twitter-icon.svg" />
                  </a>
                  <a
                    title="twitter"
                    onClick={handleShareUpdate}
                    href={`https://t.me/share/url?url=${data?.attributes?.link}&text=${data?.attributes?.title}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="assets/images/logos_telegram-icon.svg" />
                  </a>
                </div>
              )}
              <span
                onClick={copyToClipboard}
                className={textCopy && styles.copyIconHide}
              >
                <img src="assets/images/copy.svg" />
              </span>
            </div> */}
        {/* </div>
        </div> */}
        <div className={styles.wrapper}>
          <h5>Social Share</h5>
          <div className={styles.shares}>
            <div className={styles.icons}>
              <a
                title="twitter"
                onClick={handleShareUpdate}
                href={`https://twitter.com/share?text=${data?.attributes?.title}&url=${data?.attributes?.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/images/logos_twitter-icon.svg" />
              </a>
              <a
                title="telegram"
                onClick={handleShareUpdate}
                href={`https://t.me/share/url?url=${data?.attributes?.link}&text=${data?.attributes?.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/images/logos_telegram-icon.svg" />
              </a>
            </div>
            <p>{data?.attributes?.shares}</p>
          </div>
        </div>
        <div className={styles.gridIcons}>
          <div className={styles.copyLinks}>
            <span>
              <BsLink45Deg />
            </span>

            <p>{data?.attributes?.link}</p>
            <button
              type="button"
              className={textCopy && styles.copyIconHide}
              onClick={copyToClipboard}
            >
              {textCopy ? "Copy to Clipboard" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
