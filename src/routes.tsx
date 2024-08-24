import { ReactNode } from "react";
import Homepage from "./container/Homepage";
import User from "./container/User";

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
