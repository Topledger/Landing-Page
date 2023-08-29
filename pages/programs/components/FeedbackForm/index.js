import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

import Portal from "@/components/Portal";

import styles from "./index.module.scss";
import Rating from "./Rating";
import { postFeedback } from "queries";

function FeedbackForm({}) {
  const [open, setOpen] = useState();
  const [rating, setRating] = useState();
  const [feedback, setFeedback] = useState("");
  const modalRef = useRef();
  const [loading, setLoading] = useState();
  const [talkToUsEl, setTalkToUsEl] = useState();
  const [isFeedbackShown, setIsFeedbackShown] = useState(
    localStorage.feedback === "shown"
  );
  const [isFeedbackDone, setIsFeedbackDone] = useState(
    localStorage.feedback === "done"
  );
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleCancel = () => {
    setRating();
    setFeedback("");
    setOpen(false);
  };

  const handleSubmit = async () => {
    const formData = { rating, feedback };
    try {
      setLoading(true);
      await postFeedback(formData);
      setFeedbackSuccess(true);
      setIsFeedbackDone(true);
      localStorage.feedback = "done";
      setRating();
      setFeedback("");
    } catch (err) {}
    setLoading(false);
    // setOpen(false);
  };

  const showFeedback = useCallback(() => {
    if (!localStorage.feedback) {
      setOpen(true);

      if (localStorage.feedback !== "shown") {
        setIsFeedbackShown(true);
        localStorage.feedback = "shown";
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      showFeedback();
    }, 30000);

    return () => clearTimeout(timer);
  }, [showFeedback]);

  useEffect(() => {
    if (talkToUsEl) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const scrollParent = document?.documentElement;
          if (entry.isIntersecting === 1 && scrollParent?.scrollTop > 6000) {
            showFeedback();
          }
        });
      });
      observer.observe(talkToUsEl);

      return () => {
        observer.disconnect();
      };
    }
  }, [talkToUsEl, showFeedback]);

  return (
    <>
      <div className={styles.talkToUs}>
        <a
          title="telegram"
          draggable="false"
          href="https://telegram.me/ergon50"
          target="_blank"
          rel="noreferrer"
          ref={setTalkToUsEl}
        >
          <img draggable="false" src="/assets/images/telegram-icon.svg" />
          Talk to us
        </a>
      </div>
      {isFeedbackShown && !isFeedbackDone && !open && (
        <Portal>
          <div className={styles.feedbackButton}>
            <button onClick={() => setOpen(true)}>Feedback</button>
          </div>
        </Portal>
      )}
      <Portal>
        <CSSTransition
          nodeRef={modalRef}
          in={open}
          timeout={{
            enter: 0,
            exit: 500,
          }}
          mountOnEnter
          unmountOnExit
          classNames={{
            appear: styles.modalContainer,
            enter: styles.modalContainerEnter,
            enterActive: styles.modalContainerEnterActive,
            enterDone: styles.modalContainerEnterDone,
            exit: styles.modalContainerExit,
            exitActive: styles.modalContainerExitActive,
          }}
        >
          <div
            ref={modalRef}
            className={cx(styles.modalContainer, "modal-container")}
          >
            <div className={styles.modalContent}>
              {feedbackSuccess ? (
                <div className={styles.successContainer}>
                  <div className={styles.successImage}>
                    <Image
                      width={141}
                      height={141}
                      src="/assets/images/feedback-success.png"
                    />
                  </div>
                  <div className={styles.successLine1}>Thanks!</div>
                  <div className={styles.successLine2}>
                    for your valuable feedback
                  </div>
                  <div className={styles.successClose}>
                    <button onClick={() => setOpen(false)}>Close</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.head}>
                    <span className={styles.title}>
                      Kindly leave a reaction
                    </span>
                    <span className={styles.subtitle}>to help us improve</span>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.form}>
                      <Rating value={rating} onChange={setRating} />
                      <p className="feedback-row">
                        <span className="label">
                          <span>Tell us how we can improve</span>{" "}
                          <span className="option-text">(optional)</span>
                        </span>

                        <textarea
                          className="feedback-input"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                        />
                      </p>
                      <p className="feedback-row submit-row">
                        <button
                          className="feedback-button"
                          onClick={handleCancel}
                          disabled={loading}
                        >
                          Not now
                        </button>
                        <button
                          className="feedback-button feedback-submit"
                          onClick={handleSubmit}
                          disabled={loading || !rating}
                        >
                          Submit
                        </button>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
}

export default FeedbackForm;
