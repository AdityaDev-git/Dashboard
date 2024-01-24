import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Top Product",
    },
  },
};

export const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 20, 20],
      backgroundColor: ["rgba(152, 216, 158, 1)", "rgba(246, 220, 125, 1)", "rgba(238, 132, 132, 1)"],

      borderWidth: 1,
    },
  ],
};

const ChartDonat = () => {
  return <Doughnut options={options} data={data} />;
};

export default ChartDonat;
