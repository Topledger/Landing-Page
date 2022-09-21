/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";

const GetStarted = () => {
  const router = useRouter();
  const { query } = router;

  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // const form = useRef();
  const recaptchaRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: query?.email || "",
    company: "",
    designation: "",
  });

  const onFormChange = (evt) => {
    const { value, name } = evt.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
console.log({recaptchaRef})
  const onChange = () => {
    console.log("recaptchaRef", recaptchaRef?.current?.getValue());
  };

  console.log("recaptchaRef", recaptchaRef);

  const onFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // console.log("form=====", form);

    emailjs
      .send(
        "service_62m42xo",
        "template_7gxg9as",
        {
          ...form,
          "g-recaptcha-response": recaptchaRef?.current?.getValue(),
        },
        "8cYoh9v4ZIsKb9BfX"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          if (result.status === 200) {
            router.push("/thanks");
          }
        },
        (error) => {
          console.log(error);
          if (
            error.text ===
            "reCAPTCHA: The g-recaptcha-response parameter not found"
          ) {
            setIsChecked(true);
          }
          setLoading(false);
        }
      );
  };

  const onBack = () => {
    // router.push("/");
    window.location.assign("/")
    
  };

  const varifyCallback = (response) => {
    console.log("props", response);
  };

  return (
    <>
    <Head>
        <title>Register for the demonstration | Top Ledger</title>
        <meta
          name="description"
          content="Contact us and schedule a time to get a quick walk through our solution. "
        ></meta>
        <meta
          name="keywords"
          content="Solana Analytics, Solana Blockchain, Dune Analytics, Crypto Analytics,
          Ledger Analytics, On-Chain Data, Off-Chain Data, NFT Analytics, DeFi Analytics, Crypto Dashboard,
          Solana Dashboard, P2E Games, Magic Eden, Web3, SQL"
        ></meta>
      </Head>
    <div className="get-started-main">
      <div className="left">
      <div className="back-button" onClick={onBack}>
          <img src="/assets/back.svg" />
          <span>Back</span>
        </div>

        <div className="content">
          <h1 className="title">Interested in a demo?</h1>
          <p className="description">
            Let us know where to reach you and a member of our team will contact
            you within a day to schedule a time to walk through our solution!
          </p>
        </div>
      </div>

      <div className="right">
        <div className="attraction type-2">
          <img src="/assets/get-started-bg-icon.svg" />
        </div>

        <div className="form">
          <h3 className="title">Let&apos;s get started</h3>

          <form onSubmit={onFormSubmit}>
            <div className="form-control">
              <p className="form-label">
                Name <span>*</span>
              </p>
              <div className="form-input">
                <span className="icon">
                  <img src="/assets/form-user.svg" />
                </span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your name"
                  name="name"
                  value={form.name}
                  onChange={(e) => {
                    e.preventDefault();
                    const regex = new RegExp(/^[A-Za-z\s]+$/);

                    if (regex.test(e.target.value) || e.target.value === "") {
                      onFormChange(e);
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <p className="form-label">
                Email <span>*</span>
              </p>
              <div className="form-input">
                <span className="icon">
                  <img src="/assets/email.svg" />
                </span>
                <input
                  type="email"
                  className="input-field"
                  placeholder="Your email"
                  name="email"
                  value={form.email}
                  onChange={(e) => onFormChange(e)}
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                />
              </div>
            </div>

            <div className="form-control">
              <p className="form-label">
                Company <span>*</span>
              </p>
              <div className="form-input">
                <span className="icon">
                  <img src="/assets/company.svg" />
                </span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your company"
                  name="company"
                  value={form.company}
                  onChange={(e) => onFormChange(e)}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <p className="form-label">Designation</p>
              <div className="form-input">
                <span className="icon">
                  <img src="/assets/designation.svg" />
                </span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your Designation"
                  name="designation"
                  value={form.designation}
                  // onChange={(e) => onFormChange(e)}
                  onChange={(e) => {
                    e.preventDefault();
                    const regex = new RegExp(/^[A-Za-z\s]+$/);

                    if (regex.test(e.target.value) || e.target.value === "") {
                      onFormChange(e);
                    }
                  }}
                />
              </div>
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfkFhciAAAAAJYW9D6jI65hnlgJf8lM3RC2pSQU"
              onChange={onChange}
            />
            {isChecked && (
              <span style={{ color: "red" }}>
                Please check re-capatch checkbox
              </span>
            )}
            <button className="submit-button" type="submit">
              {loading ? " Submiting......" : "Submit"}
            </button>
          </form>
        </div>

        <div className="attraction type-1">
          <img src="/assets/get-started-bg-icon.svg" />
        </div>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
