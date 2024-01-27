import cx from "classnames";

import Section from "components/Section";

import styles from "./index.module.scss";
import { getAction } from "@/components/ArticleCard/ArticleFooter";

// const caseStudy =   {
//   media: {
//     type: "image",
//     src: "/assets/images/case-studies/drift-case-study.png",
//   },
//   title: "Drift Protocol’s Data-Driven Journey with Top Ledger",
//   description:
//     "Drift Protocol is an open-sourced, decentralized exchange built on the Solana blockchain...",
//   cta: [
//     {
//       type: "link",
//       text: "Read full case study",
//       target: "_blank",
//       href: "https://docs.topledger.xyz",
//     },
//   ],
// },

const CaseStudy = ({ caseStudy }) => {
  return (
    <div className={styles.caseStudy}>
      <div className={styles.caseStudyMedia}>
        <img src={caseStudy.media.src} alt="Case study media" />
      </div>
      <div className={styles.caseStudyContent}>
        <div className={styles.caseStudyTitle}>{caseStudy.title}</div>
        <div className={styles.caseStudyDescription}>
          {caseStudy.description}
        </div>
        <div className={styles.caseStudyCta}>
          {caseStudy.cta?.map(getAction)}
        </div>
      </div>
    </div>
  );
};

const Columns = ({ className, ...props }) => {
  return <div className={cx(styles.columnsContainer, className)} {...props} />;
};

Columns.Col = ({ className, ...props }) => {
  return <div className={cx(styles.column, className)} {...props} />;
};

Columns.Col.displayName = "Columns.Col";

const CaseStudySection = ({ caseStudies = [] }) => {
  return (
    <Section containerClassName={styles.caseStudiesSection}>
      <Columns>
        <Columns.Col className={styles.csColumn}>
          <h2 className={styles.caseStudiesSectionTitle}>Case studies</h2>
          <div className={styles.caseStudiesSectionSubtitle}>
            Gain detailed insights into specific scenarios, which will help you
            understand how our platform and offerings can be applied to your own
            requirements
          </div>
          <div
            className={styles.caseStudiesSectionContent}
            style={{ marginTop: "68px" }}
          >
            {caseStudies
              .slice(0, Math.floor(caseStudies.length / 2))
              .map((caseStudy, index) => (
                <CaseStudy key={index} caseStudy={caseStudy} />
              ))}
          </div>
        </Columns.Col>
        <Columns.Col className={styles.csColumn}>
          <div className={styles.caseStudiesSectionContent}>
            {caseStudies
              .slice(Math.floor(caseStudies.length / 2))
              .map((caseStudy, index) => (
                <CaseStudy key={index} caseStudy={caseStudy} />
              ))}
          </div>
        </Columns.Col>
      </Columns>
    </Section>
  );
};

export default CaseStudySection;
