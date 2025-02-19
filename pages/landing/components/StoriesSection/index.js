import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import Section from "components/Section";
import { getId } from "helpers/utils";

import styles from "./index.module.scss";

const InsightsStories = ({ insightStory }) => {
    return (
        <div className={styles.insightStory}>
            <div className={styles.insightStoryMedia}>
                <img src={insightStory.media.src} alt="Insight story media" />
            </div>
            <div className={styles.insightStoryContent}>
                <div className={styles.insightStoryTitle}>
                    {insightStory.title}
                </div>
                <div className={styles.insightStoryFooter}>
                    <span className={styles.insightStoryFooterIcon}>
                        <Image
                            src={insightStory.footer.icon}
                            height={insightStory.footer.height}
                            width={insightStory.footer.width}
                            alt={insightStory.title}
                        />
                    </span>
                    <div className={styles.insightStoryFooterDesc}>
                        {insightStory.footer.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Columns = ({ className, ...props }) => {
    return (
        <div className={cx(styles.columnsContainer, className)} {...props} />
    );
};

Columns.Col = ({ className, ...props }) => {
    return <div className={cx(styles.column, className)} {...props} />;
};

Columns.Col.displayName = "Columns.Col";

const StoriesSection = ({ insightStories = [] }) => {
    return (
        <Section
            style={{ borderTop: "1px solid #E1E9FF" }}
            containerClassName={styles.insightStoriesSection}
            id={getId("Insight Stories")}
        >
            <Columns>
                <Columns.Col className={styles.csColumn}>
                    <h2 className={styles.insightStoriesSectionTitle}>
                        Our data, Their stories
                    </h2>
                    <div className={styles.insightStoriesSectionSubtitle}>
                        Turning insights into impact
                    </div>
                    <div className={styles.insightStoriesSectionContent}>
                        {insightStories.map((insightStory, index) => (
                            <Link href={insightStory.link} key={index}>
                                <a
                                    className={styles.linkWrapper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InsightsStories
                                        insightStory={insightStory}
                                    />
                                </a>
                            </Link>
                        ))}
                    </div>
                </Columns.Col>
            </Columns>
        </Section>
    );
};

export default StoriesSection;
