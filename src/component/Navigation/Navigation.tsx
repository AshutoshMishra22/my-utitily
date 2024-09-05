import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { NAVIGATION_TO_LINK_AUTH } from "../../constant";
import logo from "../../assets/Krypt-logos_transparent.png";

const Navigation: FC = () => {
  return (
    <nav className="navigation-container">
      <img src={logo} alt="logo" width="192px" />
      <section className="navigation-item-list">
        {NAVIGATION_TO_LINK_AUTH.map((obj) => (
          <NavLink to={obj.to} key={obj.to}>
            {obj.name}
          </NavLink>
        ))}
      </section>
    </nav>
  );
};

export default Navigation;
