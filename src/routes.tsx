import { Homepage, User } from "./container";
import { Routes, Route } from "react-router-dom";

export const routeList = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/user" element={<User />} />
  </Routes>
);
