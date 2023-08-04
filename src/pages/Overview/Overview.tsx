import Button from "../../components/Button/Button";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DonutChart from "../../components/DonutChart/DonutChart";
import LineChart from "../../components/LineChart/LineChart";
import TopProducts from "../../components/TopProducts/TopProducts";
import { cards } from "../../data";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <div className="cards between">
        {cards.map((card) => (
          <DashboardCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            amount={card.amount}
            increasePercentage={card.increasePercentage}
            increase={card.increase}
            positive={card.positive}
          />
        ))}
      </div>
      <div className="lineChart">
        <LineChart />
      </div>
      <div className="donutChart">
        <DonutChart />
      </div>
      <div className="topProducts">
        <TopProducts />
      </div>
      <div className="upgrade">
        <p>Relase your maximum potential software.</p>
        <Button text="Upgrade to Pro" />
      </div>
    </div>
  );
};

export default Overview;
