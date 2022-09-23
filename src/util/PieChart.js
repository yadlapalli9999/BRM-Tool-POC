

import React, { useEffect } from "react";
import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

export default function PieChart() {
  const { pocCount } = useSelector((store) => {
    return store["dashboard"];
  });
  
  let lastCount;
  if (pocCount.length) {
  const newObj = pocCount[0];

    lastCount = ["ideaPocs", "ActivePocs", "closedPocs", "HoldPocs"].map((item)=> newObj[item]);
  }
  


  {
    return React.createElement(Chart, {
      type: "donut",
      series: lastCount,
      options: {
        labels: ["Idea", "Active", "Hold", "Closed"],
        legend: {
          show: true,
          position: "top",
          fontWeight: "400",
        },
        colors: ["#FFCB42","#ff5722",  "#FF1E00", "#2B7A0B"],
      },
    });
  }
}


