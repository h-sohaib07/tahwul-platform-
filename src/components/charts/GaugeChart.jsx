import './GaugeChart.css';

function GaugeChart({ value, label, size = 160, color = 'success', progressColor }) {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const progress = (value / 100) * circumference;
  const strokeColor = progressColor ?? (color === 'readiness' ? '#1EA54E' : '#DB1F26');

  return (
    <div className="gauge-chart" style={{ width: size, height: size / 2 + 52 }}>
      <svg viewBox={`0 0 ${size} ${size / 2 + strokeWidth}`}>
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="var(--color-gray-200)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
        />
      </svg>
      <div className="gauge-content">
        <span className="gauge-value">{value}%</span>
        {label && <span className="gauge-label">{label}</span>}
      </div>
    </div>
  );
}

export default GaugeChart;
