import React from 'react';
import styles from './ChartTooltip.module.scss';

const ChartTooltip = ({
  title,
  value,
  date,
  percentChange,
  additionalData = [],
  position = 'top',
  visible = false
}) => {
  const arrowClass = position === 'top' ? styles.arrowBottom : styles.arrowTop;
  const isPositive = percentChange > 0;

  return (
    <div className={`${styles.tooltipContainer} ${visible ? styles.visible : ''} ${styles[position]}`}>
      <div className={styles.tooltipContent}>
        {date && <div className={styles.date}>{date}</div>}
        {title && <div className={styles.title}>{title}</div>}

        {value && (
          <div className={styles.value}>
            {value}
            {percentChange !== undefined && (
              <span className={`${styles.percentChange} ${isPositive ? styles.positive : styles.negative}`}>
                {isPositive ? '↑' : '↓'} {Math.abs(percentChange).toFixed(2)}%
              </span>
            )}
          </div>
        )}

        {additionalData.length > 0 && (
          <div className={styles.additionalData}>
            {additionalData.map((item, index) => (
              <div key={index} className={styles.dataItem}>
                <span className={styles.dataLabel}>{item.label}:</span>
                <span className={styles.dataValue}>{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={arrowClass}></div>
    </div>
  );
};

export default ChartTooltip; 