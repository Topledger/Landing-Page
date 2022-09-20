import React, { useContext, useState, useEffect } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "../../context/DarkMode";
import { AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";

import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsWhatsapp,
  BsLink45Deg,
} from "react-icons/bs";
import List from "./list";

const dashboardTabs = [
  "All",
  // , "Category A", "Category B"
];

// console.log(isDarkMode);
const listData = [
  {
    key: "1",
    title: "Gari Network",
    text: "Fastest growing WEB3 social media.",
    fav: "30 shares",
    link: "https://redash.topledger.xyz/public/dashboards/xAGJyiv1cREOP7w3QOo7xIXOcPj1KsypUt9yckv3?org_slug=default",
  },
  {
    key: "2",
    title: "Project Serum",
    text: "Trade on the world's fastest and most powerful decentralized exchange.",
    fav: "40 shares",
    link: "https://redash.topledger.xyz/public/dashboards/kR9HuP75SX5qDTDbzeybJ8SGnxdueH1FUj0kV64j?org_slug=default",
  },
];

const DashboardContent = ({ key }) => {
  const baseURL =
    "https://top-ledger-panel.dishantagnihotri.com/api/dashboards";
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(baseURL);
      if (data?.data) setList(data.data);
      else setList([]);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Fetching data...</p>;
  }

  return (
    <>
      {list.map((data) => (
        <div className={styles.list} key={data.id}>
          <List
            data={data}
            isDarkMode={isDarkMode}
            setSelectedTb
            fetchData={fetchData}
          />
          {/* <span className={styles.updated}>
          last updated <b>12 hours ago</b>
        </span> */}
        </div>
      ))}
    </>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isActive, setIsActive] = useState(false);

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    // 👇️ toggle
    // setIsActive(current => !current);

    // 👇️ or set to true
    setIsActive(true);
  };

  return (
    <>
      <section
        className={isDarkMode ? styles.blackBg : ""}
        style={{ height: listData.length > 5 ? "auto" : "100vh" }}
      >
        <div className="dashboard-container">
          <div className={styles.title}>
            <h3>Dashboards</h3>
          </div>
          <div className={styles.tabsDiv}>
            <div className={styles.tabs}>
              {dashboardTabs.map((ele, id) => (
                <div
                  className={
                    activeTab == ele
                      ? `${styles.tab} ${styles.active}`
                      : styles.tab
                  }
                  key={`dashboard-tab-${id}`}
                  onClick={() => setActiveTab(ele)}
                >
                  {ele}
                </div>
              ))}
            </div>
            {/* <div className={styles.dashIcon}>
              {isActive ? <img src="/assets/dash-icon-grey.svg" alt="dash-icon" /> : <img src="/assets/dash-icon.svg" alt="dash-icon" />}

            </div> */}
          </div>
          <div style={{ paddingTop: "40px" }}></div>
          {activeTab == "All" && <DashboardContent />}
          {/* {activeTab == "Category A" && (<h3>Category A</h3>)} */}
          {/* {activeTab == "Category B" && (<h3>Category B</h3>)} */}
        </div>
      </section>

      <section
        className={`${styles.dashboardFooter} ${
          isDarkMode ? styles.blackBg : ""
        }`}
        style={{ position: listData.length > 5 ? "unset" : "fixed" }}
      >
        <div className="dashboard-container">
          <div className={styles.bottomFlex}>
            <div className={styles.content}>
              <img
                draggable="false"
                src="/assets/images/copyright.svg"
                alt="copyright"
              />
              <p>Copyright, Top Ledger, 2022</p>
            </div>
            <div className={styles.toggleBtn + " toggle-btn"}>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
