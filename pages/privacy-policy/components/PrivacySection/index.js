import List from "@/components/List";
import Section from "@/components/Section";

import styles from "./index.module.scss";
import Divider from "../Divider";

const MarkdownUtils = {
  bold: (text) => text.replace(/\*\*([a-zA-Z0-9 _\-?/@:.]+)\*\*/g, "<b>$1</b>"),
  link: (text) =>
    text.replace(
      /\[([a-zA-Z0-9 _\-?/@:.]+)\]\(([a-zA-Z0-9 _\-?/@:.]+)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    ),
};

const MarkdownSection = ({ text }) => {
  const renderedText = MarkdownUtils.link(MarkdownUtils.bold(text));
  return (
    <div
      className={styles.markdownText}
      dangerouslySetInnerHTML={{ __html: renderedText }}
    />
  );
};

const TextSection = ({ text }) => {
  return <p className={styles.privacySectionText}>{text}</p>;
};

const ListSection = ({ list }) => {
  return (
    <List
      items={list.items.map((item) => (
        <span className={styles.listItem} key={item.title + item.definition}>
          <b>{item.title}</b>: {item.definition}
        </span>
      ))}
    />
  );
};

const Content = ({ type, title, ...props }) => {
  const renderContent = () => {
    switch (type) {
      case "text":
        return <TextSection {...props} />;
      case "list":
        return (
          <>
            {props.text && <TextSection {...props} />}
            <ListSection {...props} />
          </>
        );
      case "markdown":
        return <MarkdownSection {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.privacyContentTitle}>{title}</h2>
      {renderContent()}
    </div>
  );
};

const PrivacySection = ({ title, description, sections }) => {
  return (
    <Section className={styles.privacySection}>
      <h1 className={styles.privacySectionTitle}>{title}</h1>
      <p className={styles.privacySectionDescription}>{description}</p>
      <Divider />
      {sections.map((section, index) => (
        <>
          <Content key={index} {...section} />
          {index < sections.length - 1 && <Divider />}
        </>
      ))}
    </Section>
  );
};

PrivacySection.defaultProps = {
  sections: [],
};

export default PrivacySection;
