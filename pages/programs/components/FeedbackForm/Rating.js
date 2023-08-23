import cx from "classnames";
import Image from "next/image";

import styles from "./Rating.module.scss";

const ratingList = [
  {
    value: 1,
    content: (
      <Image width={40} height={40} src="/assets/images/ratings/rating-1.png" />
    ),
  },
  {
    value: 2,
    content: (
      <Image width={40} height={40} src="/assets/images/ratings/rating-2.png" />
    ),
  },
  {
    value: 3,
    content: (
      <Image width={40} height={40} src="/assets/images/ratings/rating-3.png" />
    ),
  },
  {
    value: 4,
    content: (
      <Image width={40} height={40} src="/assets/images/ratings/rating-4.png" />
    ),
  },
  {
    value: 5,
    content: (
      <Image width={40} height={40} src="/assets/images/ratings/rating-5.png" />
    ),
  },
];

function Rating({ value, onChange }) {
  const handleClick = (rating) => {
    onChange(rating.value);
  };

  return (
    <div className={styles.ratingContainer}>
      {ratingList.map((v) => (
        <span
          className={cx(styles.ratingItem, { selected: value === v.value })}
          onClick={() => handleClick(v)}
        >
          {v.content}
        </span>
      ))}
    </div>
  );
}

export default Rating;
