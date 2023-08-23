import { useRef, useState } from "react";
import cx from "classnames";

import Portal from "@/components/Portal";

import styles from "./index.module.scss";
import Rating from "./Rating";
import { CSSTransition } from "react-transition-group";
import { postFeedback } from "queries";

function FeedbackForm() {
  const [open, setOpen] = useState();
  const [rating, setRating] = useState();
  const [feedback, setFeedback] = useState("");
  const modalRef = useRef();
  const [loading, setLoading] = useState();

  const handleClick = () => {
    setOpen(true);
  };

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
      setRating();
      setFeedback("");
    } catch (err) {}
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.talkToUs}>
        <a
          title="telegram"
          draggable="false"
          // href="https://telegram.me/ergon50"
          // target="_blank"
          // rel="noreferrer"
          onClick={handleClick}
        >
          <img draggable="false" src="/assets/images/telegram-icon.svg" />
          Talk to us
        </a>
      </div>
      <Portal>
        <CSSTransition
          nodeRef={modalRef}
          in={open}
          timeout={250}
          mountOnEnter
          unmountOnExit
          classNames={styles.modalContainer}
        >
          <div
            ref={modalRef}
            className={cx(styles.modalContainer, "modal-container")}
          >
            <div className={styles.modalContent}>
              <div className={styles.head}>
                <span className={styles.title}>Kindly leave a reaction</span>
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
            </div>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
}

export default FeedbackForm;
