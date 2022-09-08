import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Rotate } from "react-reveal";

function AboutUs() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const onEmailChange = (e) => setEmail(e.target.value);

  const onEmailSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      router.push({
        pathname: "/get-started",
        query: { email },
      });
    }
  };

  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.about_img}>
          <img src="/assets/images/Group 200.png" alt="about-solana" />
        </div>
        <div className={styles.aboutsImg}>
          <img src="/assets/images/pink-img.png" alt="about-solana" />
        </div>
        <div className={styles.aboutsImgs}>
          <img src="/assets/images/Group 208.png" alt="about-solana" />
        </div>
        <div className={styles.aboutsImagess}>
          <img src="/assets/images/black-red-img.png" alt="about-solana" />
        </div>
        <div className={styles.groupImgs}>
          <img src="/assets/images/pink-img.png" alt="about-solana" />
        </div>

        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>
              Transforming the way web3 teams do data analysis.
            </h1>
            <p className={styles.description}>
              Unlocking and unleashing the power of blockchain data has never
              been easier, until now.
            </p>
          </div>

          <div className={styles.mainGruop}>
            <div className={styles.groupssImgs}>
              <img src="/assets/images/yellow-img.png" alt="about-solana" />
            </div>
            <div className={styles.icans}>
              <img src="/assets/images/blue-img.png" alt="about-solana" />
            </div>
          </div>
        </div>

        <div className={styles.nxt}>
          <div className="middle">
            <div className="mouse"></div>
          </div>
          {/* <img src="/assets/images/nxtBtn.png" alt="about-solana" /> */}
        </div>
      </section>

      <section
        className={`${styles.aboutTopLedger} ${styles.backgroundLedger}`}
      >
        <div className={styles.wrapper}>
          <div className={styles.Content}>
            <div className={styles.contentImage}>
              <Rotate>
                <img src="/assets/images/Group 198.png" alt="about-solana" />
              </Rotate>
            </div>

            <h3 className={styles.title}>
              Socio-economically, utilizing Blockchain technology in various
              areas of our lives will be the biggest social experiment of our
              times.
            </h3>
            <p className={styles.description}>
              Top Ledger aims to be a part of this experiment by helping people
              see and understand the ever growing Blockchain data. We are here
              to help web3 teams become more data-driven, making it as simple as
              possible for them to leverage analytics into their daily
              workflows.
            </p>
          </div>
        </div>

        <div className={styles.ImgWapper}>
          <div className={`${styles.imageWrapper} ${styles.imgAboutDiv}`}>
            {/* <img
              src="/assets/images/Frame 131.png"
              alt="about-solana12"
              className={styles.aboutAllDesktop}
            /> */}
            <img src="/assets/images/about-page.svg" alt="about"  />
            {/* <img
              src="/assets/images/about-all-mobile.png"
              alt="about-mobile"
              className={styles.aboutAllMobile}
            /> */}
          </div>
        </div>
      </section>

      <section className={styles.aboutTopLedger}>
        <div className={`${styles.wrapper} ${styles.topLedgerWrapper}`}>
          <div className={styles.Content}>
            <div className={styles.contentImage}>
              <Rotate>
                <img src="/assets/images/Group 198.png" alt="about-solana" />
              </Rotate>
            </div>

            <h3 className={styles.title}>
              At Top Ledger, customer and employee success and satisfaction are
              the top two priorities.
            </h3>
            <p className={styles.description}>
              The two go hand-in-hand, and as they build each other up, they
              create an external and internal army of brand ambassadors.
            </p>
          </div>
        </div>

        <div className={`${styles.ImgWapper} ${styles.ImgWapper2}`}>
          <div className={styles.imageWrapper}>
            {/* <img
              src="/assets/images/about-slider-2.png"
              alt="about- solana12"
              style={{
                maxWidth: 500,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            /> */}
            <img
              src="/assets/images/team-upper.png"
              alt="about- solana12"
              style={{
                maxWidth: 500,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles.aboutTopLedger} ${styles.aboutReverseColumn}`}
        id="team"
      >
        <div className={`${styles.wrapper} ${styles.withoutBg}`}>
          <div className={styles.Content}>
            <h3 className={styles.title}>
              Afterall, a great team does it all...
            </h3>
            <p className={styles.description}>
              Meet our incredible team that make blockchain data accessible and
              queriable.
            </p>
          </div>
        </div>

        <div className={styles.mainCard}>
          <div className={styles.mainCardss}>
            <div className={`${styles.mainCardMain} ${styles.CardImg}`}>
              <img src="/assets/images/Component 5.png" alt="about-solana" />

              <div className={styles.contentBlock}>
                <h3>Harsh Vardhan Sharma</h3>
                <p>Head of Techonology</p>

                <div className={styles.socialIcons}>
                  {/* <div className={styles.icon}>
                    <img src="/assets/images/twitter-icon.svg" />
                  </div> */}

                  <div className={styles.icon}>
                    <a
                      href="https://telegram.me/alaivable"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/telegram-icon.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.mainCardMain} ${styles.CardImg1}`}>
              <img src="/assets/images/Components05.png" alt="about-solana" />

              <div className={styles.contentBlock}>
                <h3>Deepak Khatri</h3>
                <p>Co-Founder, CTO</p>

                <div className={styles.socialIcons}>
                  {/* <div className={styles.icon}>
                    <img src="/assets/images/twitter-icon.svg" />
                  </div> */}

                  <div className={styles.icon}>
                    <a
                      href="https://telegram.me/DKdocs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/telegram-icon.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.mainCardMain} ${styles.CardImg2}`}>
              <img src="/assets/images/Frame 77.png" alt="about-solana" />

              <div className={styles.contentBlock}>
                <h3>Nitin Shukla</h3>
                <p>Co-Founder, CEO</p>

                <div className={styles.socialIcons}>
                  <div className={styles.icon}>
                    <a
                      href="https://twitter.com/ergon50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/twitter-icon.svg" />
                    </a>
                  </div>

                  <div className={styles.icon}>
                    <a
                      href="https://telegram.me/ergon50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/telegram-icon.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.mainCardMain} ${styles.CardImg3}`}>
              <img src="/assets/images/Component 500.png" alt="about-solana" />

              <div className={styles.contentBlock}>
                <h3>Lokesh Tiwari</h3>
                <p>Head of Design</p>

                <div className={styles.socialIcons}>
                  <div className={styles.icon}>
                    <a
                      href="https://twitter.com/urluckyturtle"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/twitter-icon.svg" />
                    </a>
                  </div>

                  <div className={styles.icon}>
                    <a
                      href="https://telegram.me/urluckyturtle"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/images/telegram-icon.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className={`${styles.aboutTopLedger} ${styles.powerSection}`}
        style={{ background: "#EEF2FC", height: 400, maxHeight: 400 }}
      >
        <div className={styles.wrapper}>
          <div
            className={`${styles.Content} ${styles.Contentss}`}
            style={{
              alignItems: "end",
              justifyContent: "center",
              // paddingTop: 130,
            }}
          >
            <h2 className={styles.title}>
              Start Building Powerful Dashboards.
            </h2>

            <form onSubmit={onEmailSubmit}>
              <div className={styles.description}>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  onChange={onEmailChange}
                  value={email}
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                />
                <button type="submit" className={`signUp ${styles.SignUp}`}>
                  Get it today!
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={`${styles.imageWrapper}`}>
          <img src="/assets/images/Frame 00208.png" alt="about-solana" />
        </div>
      </section> */}
      <section className={styles.emailSection}>
        <div className={styles.wrapper}>
          <div className={styles.Content}>
            <h2 className={styles.title}>
              Start Building Powerful Dashboards.
            </h2>
            <form onSubmit={onEmailSubmit}>
              <div className={styles.description}>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  onChange={onEmailChange}
                  value={email}
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                />
                <button type="submit" className={`signUp ${styles.SignUp}`}>
                  Get it today!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
