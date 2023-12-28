"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', click: 2400, visit: 4000 },
  { name: 'Page B', click: 1398, visit: 3000 },
  { name: 'Page C', click: 9800, visit: 2000 },
  { name: 'Page D', click: 3908, visit: 2780 },
  { name: 'Page E', click: 4800, visit: 1890 },
  { name: 'Page F', click: 3800, visit: 2390 },
  { name: 'Page G', click: 4300, visit: 3490 },
];

const Chart = () => {
  return (
    <div className="bg-gray-800 rounded-md p-4">
      <h2 className="text-2xl font-bold mb-4">Weekly Transaction Record</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8883d8" name="Visit" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" name="Click" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
