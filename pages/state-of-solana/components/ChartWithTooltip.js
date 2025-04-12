import React, { useState, useRef } from 'react';
import ChartTooltip from './ChartTooltip';
import styles from './ChartWithTooltip.module.scss';

const ChartWithTooltip = ({ chartData = [] }) => {
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);

  // Show tooltip when hovering over a data point
  const handleDataPointHover = (dataPoint, event) => {
    const chartRect = chartRef.current.getBoundingClientRect();
    const x = event.clientX - chartRect.left;
    const y = event.clientY - chartRect.top;

    // Determine if tooltip should be above or below the point
    const position = y < chartRect.height / 2 ? 'bottom' : 'top';

    setTooltipPosition({ x, y });
    setTooltipData({
      title: 'SOL Price',
      value: `$${dataPoint.value.toFixed(2)}`,
      date: new Date(dataPoint.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      percentChange: dataPoint.percentChange,
      additionalData: [
        { label: 'Volume', value: `$${dataPoint.volume.toLocaleString()}` },
        { label: 'Market Cap', value: `$${dataPoint.marketCap.toLocaleString()}` }
      ],
      position
    });
  };

  // Hide tooltip when mouse leaves data point
  const handleDataPointLeave = () => {
    setTooltipData(null);
  };

  return (
    <div className={styles.chartContainer} ref={chartRef}>
      {/* This would be your actual chart component */}
      <div className={styles.mockChart}>
        {chartData.map((dataPoint, index) => (
          <div
            key={index}
            className={styles.dataPoint}
            style={{
              left: `${(index / (chartData.length - 1)) * 100}%`,
              bottom: `${(dataPoint.value / 100) * 80}%`
            }}
            onMouseEnter={(e) => handleDataPointHover(dataPoint, e)}
            onMouseLeave={handleDataPointLeave}
          />
        ))}

        {/* Visual line connecting data points */}
        <svg className={styles.chartLine} viewBox={`0 0 100 100`} preserveAspectRatio="none">
          <polyline
            points={chartData.map((point, index) =>
              `${(index / (chartData.length - 1)) * 100},${100 - (point.value / 100) * 80}`
            ).join(' ')}
            fill="none"
            stroke="#1a3989"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* The tooltip component */}
      {tooltipData && (
        <div
          className={styles.tooltipWrapper}
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: tooltipData.position === 'top'
              ? 'translate(-50%, -100%)'
              : 'translate(-50%, 10px)'
          }}
        >
          <ChartTooltip
            title={tooltipData.title}
            value={tooltipData.value}
            date={tooltipData.date}
            percentChange={tooltipData.percentChange}
            additionalData={tooltipData.additionalData}
            position={tooltipData.position}
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default ChartWithTooltip; 