import "./Topbar.scss";
import { GoBell, GoSearch } from "react-icons/go";

const Topbar = () => {
  return (
    <div className="topbar between">
      <div className="left">
        <h2>Welcome back, Jenny</h2>
        <p>Here's what's happening with your store today.</p>
      </div>
      <div className="right between">
        <GoSearch className="topbarIcon" />
        <GoBell className="topbarIcon" />
        <img src="person.png" alt="person" />
        <p className="name">Jenny Wilson</p>
      </div>
    </div>
  );
};

export default Topbar;
