import Card from "../Card";
import Chip from "../Chip";
import FooterActions from "./ArticleFooter";

import styles from "./index.module.scss";

const ArticleCard = ({ article }) => {
  return (
    <Card>
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
    </Card>
  );
};

export default ArticleCard;
