import { ReactNode } from "react";
import { Homepage, User } from "./container";

export const routeList: Array<Record<string, string | ReactNode>> = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/user",
    element: <User />,
  },
];
