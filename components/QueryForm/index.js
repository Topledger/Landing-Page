import Image from "next/image";
import Button from "../Button";
import SvgIcon from "../SvgIcon";
import styles from "./index.module.scss";
import { useState } from "react";
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

const isValid = (value, validations) => {
  return validations.every((validation) => validation(value));
};

const Input = ({ icon, className, validations, ...inputProps }) => {
  const [valid, setIsValid] = useState(!validations);

  return (
    <span className={styles.inputContainer}>
      <SvgIcon name={icon} className={styles.inputIcon} />
      <input
        className={styles.input}
        {...inputProps}
        onChange={(e) => setIsValid(isValid(e.target.value, validations))}
      />
      {validations && (
        <span className={styles.check}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            fill="none"
            color={valid ? "#49b11f" : "#c7c8d9"}
          >
            <path fill="currentColor" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Z" />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.95 4.65 6.638 5.963 5.325 7.275 4.2 6.15"
            />
          </svg>
        </span>
      )}
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
const EMAIL_REGEX = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const validations = {
  isNotEmpty: (value) => !!value?.trim(),
  isEmail: (value) => EMAIL_REGEX.test(value),
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
              <li>
                <SvgIcon
                  name="diamond-bullet"
                  color="#8692AD"
                  height={16}
                  width={16}
                />{" "}
                Quick turnaround time
              </li>
              <li>
                <SvgIcon
                  name="diamond-bullet"
                  color="#8692AD"
                  height={16}
                  width={16}
                />{" "}
                One-stop analytics platform
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
              validations={[validations.isNotEmpty]}
            />
          </FormRow>
          <FormRow label="Email">
            <Input
              icon="email"
              placeholder="Email"
              validations={[validations.isNotEmpty, validations.isEmail]}
            />
          </FormRow>
          <FormRow label="Company">
            <Input
              icon="company"
              placeholder="Your company"
              validations={[validations.isNotEmpty]}
            />
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
