import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import cx from "classnames";

import Button from "../Button";
import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";
import { postFeedback } from "queries";

const isValid = (value, validations) => {
  return validations.every((validation) => validation(value));
};

const Input = ({ icon, className, validations, name, ...inputProps }) => {
  const [valid, setIsValid] = useState(!validations);

  return (
    <span className={styles.inputContainer}>
      <SvgIcon name={icon} className={styles.inputIcon} />
      <input
        className={styles.input}
        name={name}
        {...inputProps}
        {...(validations && {
          onChange: (e) => setIsValid(isValid(e.target.value, validations)),
        })}
      />
      <input type="hidden" name={`${name}_valid`} value={valid} />
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
      {label && (
        <label className={styles.label}>
          {label}
          {optional && <span className={styles.optional}> (Optional)</span>}
        </label>
      )}
      {children}
    </div>
  );
};
const EMAIL_REGEX = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const validations = {
  isNotEmpty: (value) => !!value?.trim(),
  isEmail: (value) => EMAIL_REGEX.test(value),
};

const isInValidForm = (fields, formValues) => {
  return fields.some((field) => formValues[`${field}_valid`] !== "true");
};

const QueryForm = () => {
  const formRef = useRef();
  const captchaRef = useRef();
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onScriptLoad = useCallback(() => {
    console.log("Script loaded", grecaptcha);
    grecaptcha.ready(() => {
      grecaptcha.render(captchaRef.current, {
        sitekey: "6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE",
      });
    });
  }, []);

  const onFormChange = useCallback((e) => {
    const form = e.target.form;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);

    console.log("values", values);

    setFormValues(values);
  }, []);

  const onFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("formValues", formValues);
      try {
        setIsLoading(true);
        await postFeedback(
          formValues,
          "AKfycbyApPF58K1Xp8xtMs-ZO54YzMNz85hna65n0e3Wm-cW4lGUegp8VNtBPFOjqpwPwmY5Pw"
        );
        setIsLoading(false);
        setIsSubmitted(true);
      } catch (err) {
        console.log("error", err);
      }
    },
    [formValues]
  );

  useEffect(() => {
    let timer;
    const listenToCaptcha = () => {
      const form = formRef.current;
      if (form) {
        const formData = new FormData(form);
        const values = Object.fromEntries(formData);

        if (values["g-recaptcha-response"]) {
          setFormValues(values);
          // clearInterval(timer);
        }
      }
    };

    timer = setInterval(listenToCaptcha, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(() => {
        grecaptcha.render(captchaRef.current, {
          sitekey: "6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE",
        });
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        onLoad={onScriptLoad}
      ></Script>
      {!isSubmitted && (
        <form
          className={styles.formContainer}
          onChange={onFormChange}
          ref={formRef}
          onSubmit={onFormSubmit}
        >
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
                  name="name"
                  placeholder="Your full name"
                  validations={[validations.isNotEmpty]}
                />
              </FormRow>
              <FormRow label="Email">
                <Input
                  icon="email"
                  name="email"
                  placeholder="Email"
                  validations={[validations.isNotEmpty, validations.isEmail]}
                />
              </FormRow>
              <FormRow label="Company">
                <Input
                  icon="company"
                  name="company"
                  placeholder="Your company"
                  validations={[validations.isNotEmpty]}
                />
              </FormRow>
              <FormRow label="Designation" optional>
                <Input
                  icon="designation"
                  name="designation"
                  placeholder="Your designation"
                />
              </FormRow>
            </div>
            <div className={styles.captcha}>
              <FormRow>
                <div
                  ref={captchaRef}
                  className={cx("g-recaptcha", styles.recaptcha)}
                  data-sitekey="6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE"
                  data-callback={(token) => console.log(token)}
                ></div>
              </FormRow>
            </div>
            <div className={styles.submitRow}>
              <Button
                primary
                className={styles.submitButton}
                color="#085ED4"
                disabled={
                  isInValidForm(
                    ["name", "email", "company", "designation"],
                    formValues
                  ) ||
                  !formValues["g-recaptcha-response"] ||
                  isLoading
                }
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className={styles.submittedForm}>
          <div className={styles.submittedContainer}>
            <div className={styles.successImageContainer}>
              <Image
                className={styles.successImage}
                src="/assets/images/feedback-success.gif"
                width={48}
                height={48}
              />
            </div>
            <div className={styles.successLine1}>
              We&apos;ve got your details!
            </div>
            <div className={styles.successLine2}>
              Our team will get back to you within a day!
            </div>
            <div className={styles.successLine3}>
              See what&apos;s possible with our public dashboards
            </div>
            <div className={styles.successLine4}>
              <Button.Link
                href="/dashboard-list"
                color="#085ED4"
                secondary
                target="_blank"
              >
                Public dashboards
              </Button.Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// We've got your details!
// Our team will get back to you within a day!
// See what's possible with our public dashboards
// Public dashboards

export default QueryForm;
