import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeList } from "./routes";
import "./App.scss";

const router = createBrowserRouter(routeList);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
