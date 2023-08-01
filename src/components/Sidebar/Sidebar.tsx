import { NavLink, Link } from "react-router-dom";
import { menu } from "../../data";
import { FiLogOut } from "react-icons/fi";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="logo">
        <img src="logo.svg" alt="logo" />
        <h2>salence</h2>
      </Link>
      <div className="menu">
        {menu.map((item) => (
          <NavLink className="menuItem" to={item.url} key={item.id}>
            <span className="menuIcon">{item.icon}</span>
            <span className="menuTitle">{item.title}</span>
          </NavLink>
        ))}
      </div>
      <div className="links">
        <NavLink className="menuItem" to="/help">
          <span className="menuTitle">Help</span>
        </NavLink>
        <NavLink className="menuItem" to="/contact">
          <span className="menuTitle">Contact</span>
        </NavLink>
        <NavLink className="menuItem" to="/logout">
          <span className="menuIcon">
            <FiLogOut />
          </span>
          <span className="menuTitle">Log out</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
