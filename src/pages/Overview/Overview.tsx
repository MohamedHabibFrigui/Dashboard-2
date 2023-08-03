import DashboardCard from "../../components/DashboardCard/DashboardCard";
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
      <div className="lineChart">lineChart</div>
      <div className="donutChart">donutChart</div>
      <div className="topProducts">topProducts</div>
      <div className="upgrade">upgrade</div>
    </div>
  );
};

export default Overview;
