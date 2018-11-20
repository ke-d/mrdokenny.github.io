import * as React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

class ColorfulPieChartProps {
  public data: object[];
  public animate?: boolean = true;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#f44336',
  '#e91e63',
  '#00bcd4',
  '#ff5722',
  '#ff9800',
  '#8bc34a',
];

const ColorfulPieChart = ({ data, animate }: ColorfulPieChartProps) => (
  <ResponsiveContainer width={'100%'} height={250}>
    <PieChart>
      <Tooltip />
      <Legend />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
        label={data.length > 1}
        isAnimationActive={animate}
      >
        {data.map((entry, index: number) => (
          <Cell key={index} fill={data.length > 1 ? COLORS[index % COLORS.length] : COLORS[5]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default ColorfulPieChart;
