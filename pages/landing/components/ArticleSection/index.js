import ArticleCard from "@/components/ArticleCard";
import AggregatedOfferingsCard from "@/components/AggregatedOfferingsCard";
import Section from "@/components/Section";
import { getId } from "helpers/utils";

import style from "./index.module.scss";

const ArticleSection = ({
  apisArticle,
  researchArticle,
  aggregatedArticles = [],
}) => {
  return (
    <Section className={style.section} id={getId("Articles")}>
      <div className={style.layout}>
        <div className={style.topRow}>
          {apisArticle && (
            <ArticleCard
              article={apisArticle}
              variant={apisArticle.variant || "default"}
            />
          )}
          {researchArticle && (
            <ArticleCard
              article={researchArticle}
              variant={researchArticle.variant || "default"}
            />
          )}
        </div>
        <div className={style.bottomRow}>
          <AggregatedOfferingsCard sections={aggregatedArticles} />
        </div>
      </div>
    </Section>
  );
};

export default ArticleSection;
