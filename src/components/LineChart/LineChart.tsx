import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";
import { linechartData } from "../../data";
import "./LineChart.scss";

Chart.register(LinearScale);

const LineChart = () => {
  const data = {
    labels: linechartData.months,
    datasets: [
      {
        label: "Revenue",
        data: linechartData.revenueData,
        fill: false,
        borderColor: "#DA5538",
        lineTension: 0.8,
      },
      {
        label: "Orders",
        data: linechartData.ordersData,
        fill: false,
        borderColor: "#D3F56A",
        lineTension: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 400,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#363636",
        titleColor: "#7d7d7d",
        bodyColor: "white",
      },
    },
  };

  return (
    <div className="lineChartContainer">
      <header className="between">
        <h3>Revenue vs Orders</h3>
        <div className="labels">
          <span className="revenue">Revenue</span>
          <span className="orders">Orders</span>
        </div>
      </header>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
