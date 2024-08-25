import { Homepage, User, AddLink } from "./container";
import { Routes, Route } from "react-router-dom";

export const routeList = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/add-link" element={<AddLink />} />
    <Route path="/user" element={<User />} />
  </Routes>
);
