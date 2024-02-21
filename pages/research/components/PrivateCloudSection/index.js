import Image from "next/image";
import cx from "classnames";

import Section from "@/components/Section";
import Button from "@/components/Button";
import UnderlinedText from "@/components/UnderlinedText";
import Icon from "@/components/Icon";
import QueryFormModal from "@/components/QueryForm/QueryFormModal";

import styles from "./index.module.scss";

const CloudSection = ({ section = [] }) => {
  const cta = section.cta ?? {};
  return (
    <div className={styles.cloudSection}>
      <h3 className={cx(styles.cloudSectionTitle, section.customClass)}>
        {section.title}
      </h3>
      <h3
        className={cx(
          styles.cloudSectionTitleMobile,
          styles.cloudSectionTitle,
          section.customClass
        )}
      >
        {section.titleMobile ?? section.title}
      </h3>
      <div
        className={styles.cloudSectionFeatures}
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.features?.map((feature, index) => (
          <div className={styles.cloudSectionFeature} key={index}>
            <h4 className={styles.cloudSectionFeatureTitle}>{feature.title}</h4>
            <p className={styles.cloudSectionFeatureDescription}>
              {feature.description}
            </p>
          </div>
        ))}
        {section.cta && (
          <div className={styles.cloudSectionCTA}>
            <Button.Link
              tertiary
              color="#374151"
              href={cta.href}
              target="_blank"
              noArrow
            >
              {cta.text} {cta.icon && <Icon name={cta.icon} />}
            </Button.Link>
          </div>
        )}
      </div>
    </div>
  );
};

const PrivateCloudFeatures = ({ image, sections = [] }) => {
  return (
    <div className={styles.cloudSectionContainer}>
      {sections?.map((section, index) => (
        <>
          <CloudSection section={section} />
          {index !== sections.length - 1 && (
            <div className={styles.cloudSectionDivider}>{image}</div>
          )}
        </>
      ))}
    </div>
  );
};

const PrivateCloudSection = ({ sections = [] }) => {
  return (
    <Section
      className={styles.privateCloudSection}
      containerClassName={styles.privateCloudSectionContainer}
    >
      <div className={styles.sectionHead}>
        <div>
          <h2 className={styles.sectionTitle}>
            <UnderlinedText>Fast, reliable and decoded</UnderlinedText> Solana
            data in your private cloud
          </h2>
        </div>
        <p className={styles.sectionDescription}>
          Seamless integration of decoded data into your existing systems,
          empowering you to enhance your market research and advanced analytics
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
                  src={`/assets/images/landing/pc-icon-${index + 1}.svg`}
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
          <PrivateCloudFeatures
            sections={sections}
            image={
              <Image
                src="/assets/images/research/private-cloud.svg"
                width={328}
                height={511}
                alt="Private Cloud"
              />
            }
          />
        </div>
        <div className={styles.sectionAction}>
          <span className={styles.scheduleMessage}>
            We collaborate closely with you to gain a thorough understanding of
            your specific needs and offer comprehensive enterprise support
            throughout the entire process
          </span>
          <Button.Link
            primary
            color="#085ED4"
            href="https://calendly.com/nitin_topledger/30min"
            target="_blank"
            noArrow
          >
            Schedule a call
          </Button.Link>
        </div>
      </div>
    </Section>
  );
};

export default PrivateCloudSection;
