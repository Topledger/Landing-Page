import ArticleCard from "@/components/ArticleCard";
import Section from "@/components/Section";

import style from "./index.module.scss";

const ArticleSection = ({ articles }) => {
  return (
    <Section>
      <div className={style.columns}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </Section>
  );
};

export default ArticleSection;
