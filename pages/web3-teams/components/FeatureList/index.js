import Chip from "@/components/Chip";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import SvgIcon from "@/components/SvgIcon";

import styles from "./index.module.scss";

// const features = {
//   media: {
//     type: "video",
//     src: "/assets/videos/web3-teams/feature-visualize-data.mp4",
//   },
//   tags: ["Know your users"],
//   title: "Wallet analytics at scale",
//   description:
//     "We index every wallet on Solana, along with their activities across DEXs, NFTs, DePINs, LST protocols, perpetuals, and more. This enables you to analyze all of your users",
//   features: [
//     "No code required",
//     "Dynamic filters",
//     "Real time",
//     "CSV export",
//   ],
//   cta: [
//     {
//       type: "link",
//       text: "Analyze now",
//       target: "_blank",
//       href: "https://docs.topledger.xyz",
//     },
//   ],
// },

const Media = ({ media }) => {
  return media?.type === "video" ? (
    <video
      className={styles.video}
      autoPlay
      loop
      muted
      playsInline
      src={media?.src}
    />
  ) : (
    <img className={styles.image} src={media?.src} alt="Feature media" />
  );
};

const FeatureList = ({ features }) => {
  return (
    <div className={styles.featureList} style={{ borderColor: features.color }}>
      <div
        className={styles.featureListMedia}
        style={{ backgroundColor: features?.media?.backgroundColor }}
      >
        <Media media={features?.media} />
      </div>
      <div className={styles.featureListContent}>
        <div className={styles.featureListTags}>
          {features?.tags?.map((tag, index) => (
            <Chip key={index} color={tag.color}>
              {tag.text}
            </Chip>
          ))}
        </div>
        <h3 className={styles.featureListTitle}>{features?.title}</h3>
        <p className={styles.featureListDescription}>{features?.description}</p>
        <ul className={styles.featureListFeatures}>
          {features?.features?.map((feature, index) => (
            <li key={index} className={styles.featureListItem}>
              <SvgIcon
                name="diamond-bullet"
                className={styles.bullet}
                color={features.bulletColor}
              />
              {feature}
            </li>
          ))}
        </ul>
        <div className={styles.featureListCta}>
          {features?.cta?.map((cta, index) => getAction(cta))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
