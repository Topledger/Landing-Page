import Section from "@/components/Section";

import styles from "./index.module.scss";
import Card from "@/components/Card";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import Image from "next/image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import UnderlinedText from "@/components/UnderlinedText";

const Culture = ({
  image,
  title,
  description,
  action,
  bottomContent: { text } = {},
}) => {
  const bottomContent = (
    <div className={styles.ideaSection}>
      <Icon
        name="diamond-circle"
        className={styles.bottomIcon}
        height={32}
        width={32}
      />
      <Button.Link
        tertiary
        target="_blank"
        color="#374151"
        className={styles.bottomText}
      >
        {text}
      </Button.Link>
    </div>
  );
  return (
    <Card
      contentClassName={styles.culture}
      extraContent={{
        bottom: bottomContent,
        bottomStyle: {
          backgroundColor: "#E3E6F1",
        },
      }}
    >
      <div className={styles.cultureContent}>
        <h3 className={styles.cultureTitle}>{title}</h3>
        <p className={styles.cultureDescription}>{description}</p>
        <div className={styles.cultureAction}>{getAction(action)}</div>
      </div>
    </Card>
  );
};

const DataCultureSection = ({ dataCultures = [] }) => {
  return (
    <Section
      className={styles.cultureSection}
      id={getId("Start building a data culture")}
    >
      <div className={styles.sectionHead}>
        <div>
          <h2 className={styles.sectionTitle}>
            <UnderlinedText>Start building a data culture</UnderlinedText>
          </h2>
        </div>
        <p className={styles.sectionDescription}>
          The leader in you always liked to put data at the center of every
          decision. Top Ledger helps you bring that to reality
        </p>
        <div className={styles.chartIcons}>
          {["#F1F5FF", "#F8F0FF", "#EDFAF2", "#FCF4EF", "#F2EFFF"].map(
            (color, index) => (
              <span
                key={color}
                className={styles.chartIcon}
                style={{ backgroundColor: color }}
              >
                <Image
                  src={`/assets/images/landing/culture-icon-${index + 1}.svg`}
                  width={100}
                  height={100}
                  alt={`culture-icon-${index + 1}`}
                />
              </span>
            )
          )}
        </div>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.cultureContainer}>
          {dataCultures?.map((dataCulture) => (
            <Culture {...dataCulture} key={dataCulture.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DataCultureSection;
