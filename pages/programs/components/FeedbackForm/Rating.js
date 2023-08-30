import cx from "classnames";
import Image from "next/image";

import styles from "./Rating.module.scss";

const ratingList = [
  {
    value: 1,
    content: ({ selected }) => (
      <Image
        width={40}
        height={40}
        src={`/assets/images/ratings/rating-1${
          selected ? "-selected" : ""
        }.png`}
      />
    ),
  },
  {
    value: 2,
    content: ({ selected }) => (
      <Image
        width={40}
        height={40}
        src={`/assets/images/ratings/rating-2${
          selected ? "-selected" : ""
        }.png`}
      />
    ),
  },
  {
    value: 3,
    content: ({ selected }) => (
      <Image
        width={40}
        height={40}
        src={`/assets/images/ratings/rating-3${
          selected ? "-selected" : ""
        }.png`}
      />
    ),
  },
  {
    value: 4,
    content: ({ selected }) => (
      <Image
        width={40}
        height={40}
        src={`/assets/images/ratings/rating-4${
          selected ? "-selected" : ""
        }.png`}
      />
    ),
  },
  {
    value: 5,
    content: ({ selected }) => (
      <Image
        width={40}
        height={40}
        src={`/assets/images/ratings/rating-5${
          selected ? "-selected" : ""
        }.png`}
      />
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
          {<v.content selected={value === v.value} />}
        </span>
      ))}
    </div>
  );
}

export default Rating;
