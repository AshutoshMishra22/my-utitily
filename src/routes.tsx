import { Homepage, User, AddLink, SignUp, SignIn } from "./container";
import { Routes, Route, Navigate } from "react-router-dom";

export const routeList = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/add-link" element={<AddLink />} />
    <Route path="/user" element={<User />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
