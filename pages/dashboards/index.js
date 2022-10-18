import React, { useContext, useState, useEffect } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "../../context/DarkMode";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

import List from "./list";
import Head from "next/head";

const dashboardTabs = [
  "All",
  // , "Category A", "Category B"
];

// console.log(isDarkMode);

const DashboardContent = ({ key }) => {
  const baseURL =
    "https://top-ledger-panel.dishantagnihotri.com/api/dashboards";
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetchData(true);
  }, []);

  const fetchData = async (showLoader = false) => {
    if (showLoader) {
      setLoading(true);
    }

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
    return (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
          <>
            <div
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ebebeb",
                paddingBottom: "10px",
              }}
            >
              <div className={styles.flexBox}>
                <div className={styles.info}>
                  <h4>
                    <Skeleton width={300} />
                  </h4>
                  <p>
                    <Skeleton width={600} />
                  </p>
                </div>
                <div className={styles.fav}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Skeleton width={20} height={20} circle={true} />
                    <Skeleton width={20} height={20} circle={true} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
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
      <Head>
        <title>List of popular dashboards on solana | Top Ledger</title>
        <meta
          name="description"
          content="Helping web3 teams become more data-driven, making it as simple as possible for them to leverage analytics into their daily workflows."
        ></meta>
        <meta
          name="keywords"
          content="Solana Analytics, Solana Blockchain, Dune Analytics, Crypto Analytics,
  Ledger Analytics, On-Chain Data, Off-Chain Data, NFT Analytics, DeFi Analytics, Crypto Dashboard,
  Solana Dashboard, P2E Games, Magic Eden, Web3, SQL"
        ></meta>
      </Head>
      <section
        className={isDarkMode ? styles.blackBg : ""}
        style={{ paddingBottom: "200px" }}
        // height: listData.length > 5 ? "auto" : "100vh"
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
          {/* <div ></div> */}
          <div style={{ paddingTop: "40px", minHeight: "70vh" }}>
            {activeTab == "All" && <DashboardContent />}
          </div>
          {/* {activeTab == "Category A" && (<h3>Category A</h3>)} */}
          {/* {activeTab == "Category B" && (<h3>Category B</h3>)} */}
        </div>
      </section>

      <section
        className={`${styles.dashboardFooter} ${
          isDarkMode ? styles.blackBg : ""
        }`}
        // style={{ position: listData.length > 5 ? "unset" : "fixed" }}
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
