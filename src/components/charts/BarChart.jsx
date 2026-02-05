import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import './BarChart.css';

const barGradientId = 'bar-gradient-blue';

function BarChart({ data, height = 200 }) {
  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={barGradientId} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#0078D7" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-gray-200)" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={30} fill={`url(#${barGradientId})`} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChart;
