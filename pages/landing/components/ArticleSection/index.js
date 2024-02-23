import ArticleCard from "@/components/ArticleCard";
import Section from "@/components/Section";
import { getId } from "helpers/utils";

import style from "./index.module.scss";

const ArticleSection = ({ articles = [] }) => {
  return (
    <Section style={{ height: "758px" }} id={getId("Articles")}>
      <div className={style.columns}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </Section>
  );
};

export default ArticleSection;
