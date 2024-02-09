import Section from "@/components/Section";

import styles from "./index.module.scss";
import Carousel from "@/components/Carousel";

const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonial}>
        <div className={styles.testimonialText}>
          <p className={styles.testimonialContent}>{testimonial.text}</p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.testimonialAvatar}>
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className={styles.testimonialAuthorInfo}>
              <p className={styles.testimonialAuthorName}>{testimonial.name}</p>
              <p className={styles.testimonialAuthorCredentials}>
                {testimonial.credentials}
              </p>
            </div>
            <div className={styles.testimonialLogo}>
              <img src={testimonial.logo} alt={testimonial.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = ({ testimonials }) => {
  return (
    <Section
      style={{
        backgroundSize: "400%",
        backgroundPosition: "center center",
        borderTop: "1px solid #E8E9FA",
      }}
      containerClassName={styles.testimonialsSection}
    >
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.sectionDescription}>Real Stories, Real Success</p>
      </div>
      <div className={styles.sectionBody}>
        <Carousel className={styles.carousel}>
          {testimonials?.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
