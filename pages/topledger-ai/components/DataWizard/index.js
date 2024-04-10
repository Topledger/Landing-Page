import DataWizardInput from "./components/DataWizardInput";
import QuickPrompt from "./components/QuickPrompt";
import styles from "./index.module.scss";

// Which traders or signers or wallets have the highest number of trades?
// Which traders or signers or wallets have the highest number of trades?
// Which traders or signers or wallets have the highest number of trades?
// Which traders or signers or wallets have the highest number of trades?

const QUICK_PROMPTS = [
  {
    text: "Which traders or signers or wallets have the highest number of trades?",
  },
  {
    text: "Which traders or signers or wallets have the highest number of trades?",
  },
  {
    text: "Which traders or signers or wallets have the highest number of trades?",
  },
  {
    text: "Which traders or signers or wallets have the highest number of trades?",
  },
];

const DataWizard = ({ onQuery }) => {
  return (
    <div className={styles.wizardContent}>
      <h2 className={styles.title}>SOLANA DATA WIZARD</h2>
      <div className={styles.wizardContainer}>
        <DataWizardInput placeholder="Ask something" onInput={onQuery} />
        <div className={styles.quickPrompts}>
          {QUICK_PROMPTS.map((prompt, index) => (
            <div key={index} className={styles.quickPrompt}>
              <QuickPrompt
                prompt={prompt.text}
                onClick={() => onQuery(prompt.text)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataWizard;
