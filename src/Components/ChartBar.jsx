import React from "react";
// import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      align: "start",
    },
    title: {
      align: "start",
      display: true,
      text: "Activities",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 500,
      ticks: {
        stepSize: 100,
      },
    },
  },
};

const labels = ["week1", "week2", "week3", "week4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [100, 500, 200, 400],
      backgroundColor: "rgba(152, 216, 158, 1)",
    },
    {
      label: "User",
      data: [400, 200, 300, 100],
      backgroundColor: "rgba(238, 132, 132, 1)",
    },
  ],
};

const Chart = () => {
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     try{
  //       const response = await axios.get('https://www.randomnumberapi.com/api/v1.0/random?min=100&max=500&count=4')
  //       console.log(response.data);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // },[]);

  return <Bar options={options} data={data} />;
};

export default Chart;
