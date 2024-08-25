import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { NAVIGATION_TO_LINK } from "../../constant";

type Props = {};

const Navigation: FC = ({}: Props) => {
  return (
    <nav className="navigation-container">
      <img src="" alt="logo" />
      <section className="navigation-item-list">
        {NAVIGATION_TO_LINK.map((obj) => (
          <NavLink to={obj.to}>{obj.name}</NavLink>
        ))}
      </section>
    </nav>
  );
};

export default Navigation;
