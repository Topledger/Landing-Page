import cx from "classnames";
import Card from "../Card";
import Chip from "../Chip";
import FooterActions from "./ArticleFooter";

import styles from "./index.module.scss";

const ArticleCard = ({ article, variant = "default" }) => {
  const isFullWidth = variant === "fullWidth";

  return (
    <Card className={cx({ [styles.fullWidthCard]: isFullWidth })}>
      <div className={cx(styles.articleContent, { [styles.fullWidthContent]: isFullWidth })}>
        <div className={cx(styles.textSection, { [styles.fullWidthTextSection]: isFullWidth })}>
          <div className={styles.header}>
            {article.tags.length > 0 &&
              article.tags.map((tag) => (
                <Chip key={tag.text ?? tag.id} color={tag.color}>
                  {tag.text}
                </Chip>
              ))}
          </div>
          <h3 className={styles.title}>{article.title}</h3>
          <h3 className={cx(styles.title, styles.titleMobile)}>{article.titleMobile ?? article.title}</h3>
          <p className={styles.subtitle}>{article.description}</p>
          <div className={styles.footerContainer}>
            <FooterActions actions={article?.footer?.actionElements || []} />
          </div>
        </div>
        {isFullWidth && article.image && (
          <div className={styles.imageSection}>
            <img src={article.image} alt={article.title} className={styles.fullWidthImage} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ArticleCard;
