import "./DonutChart.scss";
import { Doughnut } from "react-chartjs-2";
import { BsArrowRight } from "react-icons/bs";

const data = {
  labels: ["Electronics", "iPhones", "Laptops"],
  datasets: [
    {
      data: [80, 10, 20],
      backgroundColor: ["#B93215", "#D3F56A", "#2A4B52"],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  rotation: 150,
};

const DonutChart = () => {
  return (
    <div className="donutChartContainer">
      <h3>Sales by category</h3>
      <div className="doughnutContainer">
        <Doughnut
          className="doughnut"
          data={data}
          options={options}
          width={350}
          height={350}
        />
        <span>$35.7K</span>
      </div>

      <div className="bottom between">
        <div className="labels">
          <span className="electronics">Electronics</span>
          <span className="laptops">Laptops</span>
          <span className="iphones">iPhones</span>
        </div>
        <button className="between">
          More <BsArrowRight className="arrowIcon" />
        </button>
      </div>
    </div>
  );
};

export default DonutChart;
