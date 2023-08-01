import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <h2>salence</h2>
      </div>
      <div className="menu">Menu</div>
      <div className="links">Links</div>
    </aside>
  );
};

export default Sidebar;
