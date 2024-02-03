import Image from "next/image";
import Button from "../Button";
import SvgIcon from "../SvgIcon";
import styles from "./index.module.scss";
// Fuel decision-making & skyrocket productivity
// Top Ledger tirelessly fosters a data-driven culture in your organization
// High-caliber team
// Uncompromising analytics
// Quick turnaround time
// One-stop analytics platform

// Name
// Your full name
// Email
// Email
// Company
// Your company
// Designation (optional)
// Your designation
// Submit

const Input = ({ icon, className, ...inputProps }) => {
  return (
    <span className={styles.inputContainer}>
      <SvgIcon name={icon} className={styles.inputIcon} />
      <input className={styles.input} {...inputProps} />
    </span>
  );
};

const FormRow = ({ label, optional, children }) => {
  return (
    <div className={styles.formRow}>
      <label className={styles.label}>
        {label}
        {optional && <span className={styles.optional}> (Optional)</span>}
      </label>
      {children}
    </div>
  );
};

const validations = {
  isEmpty: (value) => value.trim() === "",
  isEmail: (value) => !/\S+@\S+\.\S+/.test(value),
};

const QueryForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.leftSection}>
        <div className={styles.leftCardContainer}>
          <div className={styles.topSection}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/assets/images/icon-rocket.png"
                alt="rocket"
                width={50}
                height={50}
              />
            </div>
            <h2 className={styles.title}>
              Fuel decision-making <div>& skyrocket productivity</div>
            </h2>
          </div>
          <div className={styles.bottomSection}>
            <p>
              Top Ledger tirelessly fosters a data-driven culture in your
              organization
            </p>
            <ul className={styles.list}>
              <li>
                <SvgIcon
                  name="diamond-bullet"
                  color="#8692AD"
                  height={16}
                  width={16}
                />{" "}
                High-caliber team
              </li>
              <li>
                <SvgIcon
                  name="diamond-bullet"
                  color="#8692AD"
                  height={16}
                  width={16}
                />{" "}
                Uncompromising analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.formInputs}>
          <FormRow label="Name">
            <Input
              icon="user"
              placeholder="Your full name"
              validations={[validations.isEmpty]}
            />
          </FormRow>
          <FormRow label="Email">
            <Input
              icon="email"
              placeholder="Email"
              validations={[validations.isEmpty, validations.isEmail]}
            />
          </FormRow>
          <FormRow label="Company">
            <Input icon="company" placeholder="Your company" />
          </FormRow>
          <FormRow label="Designation" optional>
            <Input icon="designation" placeholder="Your designation" />
          </FormRow>
        </div>
        <div className={styles.captcha}>
          <FormRow label="Captcha"></FormRow>
        </div>
        <div className={styles.submitRow}>
          <Button primary className={styles.submitButton} color="#085ED4">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
