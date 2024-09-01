import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import {
  NAVIGATION_TO_LINK_AUTH,
  NAVIGATION_TO_LINK_GUEST,
} from "../../constant";
import { useAuth } from "../AuthContext";

const Navigation: FC = () => {
  const { isAuthenticated } = useAuth();
  const availableRoutes = isAuthenticated
    ? NAVIGATION_TO_LINK_AUTH
    : NAVIGATION_TO_LINK_GUEST;
  return (
    <nav className="navigation-container">
      <img src="" alt="logo" />
      <section className="navigation-item-list">
        {availableRoutes.map((obj) => (
          <NavLink to={obj.to} key={obj.to}>
            {obj.name}
          </NavLink>
        ))}
      </section>
    </nav>
  );
};

export default Navigation;
