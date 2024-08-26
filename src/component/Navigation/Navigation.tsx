import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { NAVIGATION_TO_LINK } from "../../constant";

const Navigation: FC = () => (
  <nav className="navigation-container">
    <img src="" alt="logo" />
    <section className="navigation-item-list">
      {NAVIGATION_TO_LINK.map((obj) => (
        <NavLink to={obj.to} key={obj.to}>
          {obj.name}
        </NavLink>
      ))}
    </section>
  </nav>
);

export default Navigation;
