import styles from "./index.module.scss";

const QuickPrompt = ({ prompt, onClick }) => {
  return (
    <div className={styles.quickPrompt} onClick={onClick}>
      {prompt}
    </div>
  );
};

export default QuickPrompt;
