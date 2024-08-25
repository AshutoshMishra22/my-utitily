import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

type Props = {};

const Navigation: FC = ({}: Props) => {
  return (
    <nav className="navigation-container">
      <img src="" alt="logo" />
      <section className="navigation-item-list">
        <NavLink to="/">Go to HOMEPAGE</NavLink>
        <NavLink to="/user">Go to USER</NavLink>
      </section>
    </nav>
  );
};

export default Navigation;
