import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Approved", value: 5 },
  { name: "Rejected", value: 3 },
  { name: "Pending", value: 4 },
];

const COLORS = ["#34d399", "#f87171", "#facc15"];

const ReportPage = () => {
  const [chartType, setChartType] = useState("Pie");

  const renderChart = () => {
    if (chartType === "Pie") {
      return (
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      );
    }

    if (chartType === "Doughnut") {
      return (
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      );
    }

    if (chartType === "Bar") {
      return (
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#fefcf8] text-[#333] px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Swap Status Report</h2>
        <p className="text-gray-600 mb-8">
          This report shows the total number of items that are Approved,
          Rejected, or Pending.
        </p>

        {/* Chart Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["Pie", "Doughnut", "Bar"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                chartType === type
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "text-indigo-600 border-indigo-300 hover:bg-indigo-100"
              }`}
            >
              {type} Chart
            </button>
          ))}
        </div>

        {/* Chart Container with fixed height */}
        <div className="w-full" style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
