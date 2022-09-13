import React from "react";
import Chart from "react-apexcharts";

export default function PieChart() {
  return React.createElement(Chart, {
    type: "donut",
    series: [50,15,10,25],
    options: {
      labels: ["Active", "Initiated", "Inactive", "Completed"],
      legend: {
        show: true,
        position:"top",
        fontWeight: "400",
      },
      colors: ["#ff5722","#FFCB42",  "#FF1E00","#2B7A0B"]
    }
  });
}