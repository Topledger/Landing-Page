import Button from "../Button";
import Chip from "../Chip";
import FooterActions from "./ArticleFooter";

import styles from "./index.module.scss";

const ArticleCard = ({ article }) => {
  const { colour, text } = article.tags;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {article.tags.length > 0 &&
          article.tags.map((tag) => (
            <Chip key={tag.id} color={tag.color}>
              {tag.text}
            </Chip>
          ))}
      </div>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.subtitle}>{article.description}</p>
      <div className={styles.footerContainer}>
        <FooterActions actions={article?.footer?.actionElements || []} />
      </div>
    </div>
  );
};

export default ArticleCard;
