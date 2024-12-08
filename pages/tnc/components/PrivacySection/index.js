import List from "@/components/List";
import Section from "@/components/Section";

import styles from "./index.module.scss";
import Divider from "../Divider";

const MarkdownUtils = {
  bold: (text) =>
    text.replace(/\*\*([a-zA-Z0-9 _\-?/@:.\(\)]+)\*\*/g, "<b>$1</b>"),
  link: (text) =>
    text.replace(
      /\[([a-zA-Z0-9 _\-?/@:.]+)\]\(([a-zA-Z0-9 _\-?/@:.]+)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    ),
};

const MarkdownSection = ({ text }) => {
  const renderedText = MarkdownUtils.link(MarkdownUtils.bold(text));
  console.log("MarkdownSection", text, renderedText);
  return (
    <div
      className={styles.markdownText}
      dangerouslySetInnerHTML={{ __html: renderedText }}
    />
  );
};

const TextSection = ({ text }) => {
  const texts = Array.isArray(text) ? text : [text];
  return (
    <>
      {texts.map((text) => (
        <p key={text} className={styles.privacySectionText}>
          {text}
        </p>
      ))}
    </>
  );
};

const ListSection = ({ list, ...props }) => {
  return <List items={list.items} {...props} />;

  // return (
  //   <List
  //     items={list.items.map((item) => (
  //       <span style={{ display: "inline-block" }}>
  //         <span className={styles.listItem} key={item.title + item.definition}>
  //           {item.title && (
  //             <>
  //               <b>{item.title}</b>:{" "}
  //             </>
  //           )}
  //           {item.definition}
  //         </span>
  //         {item.list && <List items={item.list?.items ?? []} />}
  //       </span>
  //     ))}
  //   />
  // );
};

const Content = ({ type, title, margin, ...props }) => {
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
    <div
      className={styles.content}
      style={{ ...(margin && { marginTop: margin }) }}
    >
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
          {index < sections.length - 1 && !section.noDivider && <Divider />}
        </>
      ))}
    </Section>
  );
};

PrivacySection.defaultProps = {
  sections: [],
};

export default PrivacySection;
