import cx from "classnames";

import Card from "@/components/Card";
import Chip from "@/components/Chip";
import FooterActions from "@/components/ArticleCard/ArticleFooter";

import styles from "./index.module.scss";

const AggregatedOfferingsCard = ({ sections = [] }) => {
  if (sections.length === 0) {
    return null;
  }

  return (
    <Card className={styles.wrapper}>
      <div className={styles.inner}>
        {sections.map((article, index) => (
          <div
            key={article.id}
            className={cx(styles.section, {
              [styles.sectionWithDivider]: index > 0,
            })}
          >
            <div className={styles.header}>
              {article.tags?.length > 0 &&
                article.tags.map((tag) => (
                  <Chip key={tag.text ?? tag.id} color={tag.color}>
                    {tag.text}
                  </Chip>
                ))}
            </div>
            <h3 className={styles.title}>{article.title}</h3>
            <h3 className={cx(styles.title, styles.titleMobile)}>
              {article.titleMobile ?? article.title}
            </h3>
            <p className={styles.subtitle}>{article.description}</p>
            <div className={styles.footerContainer}>
              <FooterActions actions={article?.footer?.actionElements || []} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AggregatedOfferingsCard;
