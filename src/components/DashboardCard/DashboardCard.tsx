import { ReactNode } from "react";
import "./DashboardCard.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

type dashboardCardProps = {
  icon: ReactNode;
  title: string;
  amount: string;
  increasePercentage: string;
  increase: string;
  positive?: boolean;
};

const DashboardCard = (props: dashboardCardProps) => {
  return (
    <div className="dashboardCard">
      <header>
        <div className="iconContainer center">{props.icon}</div>
        <span className="title">{props.title}</span>
      </header>
      <div className="amount">{props.amount}</div>
      <div className="stats">
        <div className={`percentage center ${props.positive ? "pos" : "neg"}`}>
          {props.positive ? <FiArrowUpRight /> : <FiArrowDownRight />}
          <span>{props.increasePercentage}</span>
        </div>
        <div className="increase">{props.increase} this week</div>
      </div>
    </div>
  );
};

export default DashboardCard;
