import styles from "./index.module.scss";

const Section = ({ children }) => (
  <section className={styles.section}>
    <div className={styles.container}>{children}</div>
  </section>
);

export default Section;
