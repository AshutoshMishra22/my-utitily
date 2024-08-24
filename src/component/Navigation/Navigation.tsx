import { FC } from "react";
import { Navigate, NavLink } from "react-router-dom";

type Props = {};

const Navigation: FC = ({}: Props) => {
  return (
    <nav>
      <NavLink to="/">Go to HOMEPAGE</NavLink>
      <> </>
      <NavLink to="/user">Go to USER</NavLink>
    </nav>
  );
};

export default Navigation;
