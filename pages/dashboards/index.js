import React, { useContext, useState, useEffect } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "../../context/DarkMode";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import List from "./list";
import Head from "next/head";
import { dashboardSorter, getCreationDate } from "helpers/dashboard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const [allDashboards, setAllDashboards] = useState([]);
  const baseURL = "https://admin.topledger.xyz/";
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const fetchData = async (
    showLoader = false,
    wannaUpdateActiveTab = false
  ) => {
    if (showLoader) {
      setLoading(true);
    }
    try {
      const { data } = await axios.get(`${baseURL}api/categories?populate=*`, {
        headers: {
          Authorization: `Bearer a51a0c17511b66c8b0c0d924fc2151ef24c29f69ca2260962fbaea5e5ae34725c0f2379b336bc54a657bf1e97c2261e5122c8202faad25b091432cb9df7d6f9e3cc6d92b9afd2787782036ad924b35bfc4524f47963d45bd54798641b14eb5c0498cae09b784df55623467fd10462f5afbe4fa203f727c79a54871c122ebf606`,
        },
      });
      // setCategories(data?.data);
      setCategories(() => {
        let mergedArray = [
          { attributes: { title: "All", dashboards: { data: [] } } },
          ...data?.data,
        ];
        if (wannaUpdateActiveTab) {
          setActiveTab(mergedArray[0]?.attributes);
        }
        return mergedArray;
      });
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(true, true);
    fetchAllDashboards();
  }, []);

  const fetchAllDashboards = async (showLoader = false) => {
    if (showLoader) {
      setLoading(true);
    }
    try {
      const { data } = await axios.get(`${baseURL}api/dashboards`, {
        headers: {
          Authorization: `Bearer a51a0c17511b66c8b0c0d924fc2151ef24c29f69ca2260962fbaea5e5ae34725c0f2379b336bc54a657bf1e97c2261e5122c8202faad25b091432cb9df7d6f9e3cc6d92b9afd2787782036ad924b35bfc4524f47963d45bd54798641b14eb5c0498cae09b784df55623467fd10462f5afbe4fa203f727c79a54871c122ebf606`,
        },
      });
      setAllDashboards(data?.data?.sort(dashboardSorter(getCreationDate, 'desc')));
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("this is the active tab data -------> ", activeTab);
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
      >
        <div className="dashboard-container">
          <div className={styles.title}>
            <h3>Dashboards</h3>
          </div>
          <div className={styles.tabsDiv}>
            <div className={styles.tabs}>
              {categories.map(({ attributes }, id) => (
                <div
                  className={
                    activeTab?.title === attributes?.title
                      ? `${styles.tab} ${styles.active}`
                      : styles.tab
                  }
                  key={`dashboard-tab-${id}`}
                  onClick={() => setActiveTab(attributes)}
                >
                  {attributes?.title}
                </div>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: "40px", minHeight: "70vh" }}>
            {loading ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                <>
                  <div
                    style={{
                      marginBottom: "20px",
                      borderBottom: "1px solid #EBEBEB",
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
              ))
            ) : activeTab?.title === "All" ? (
              allDashboards.length !== 0 ? (
                allDashboards?.map((dashboard, index) => (
                  <div className={styles.list} key={index}>
                    <List
                      data={dashboard}
                      isDarkMode={isDarkMode}
                      fetchData={fetchData}
                      fetchAllDashboards={fetchAllDashboards}
                    />
                  </div>
                ))
              ) : (
                <h1 style={{ textAlign: "center" }}> No Data found </h1>
              )
            ) : activeTab?.dashboards?.data?.length ? (
              activeTab?.dashboards.data?.sort(dashboardSorter(getCreationDate, 'desc')).map((data) => (
                <div className={styles.list} key={data.id}>
                  <List
                    data={data}
                    isDarkMode={isDarkMode}
                    fetchData={fetchData}
                    fetchAllDashboards={fetchAllDashboards}
                  />
                </div>
              ))
            ) : (
              <h1 style={{ textAlign: "center" }}> No Data found </h1>
            )}
          </div>
        </div>
      </section>
      <section
        className={`${styles.dashboardFooter} ${isDarkMode ? styles.blackBg : ""
          }`}
      >
        <div className="dashboard-container">
          <div className={styles.bottomFlex}>
            <div className={styles.content}>
              <img
                draggable="false"
                src="/assets/images/copyright.svg"
                alt="copyright"
              />
              <p>Copyright, Top Ledger, 2024</p>
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
