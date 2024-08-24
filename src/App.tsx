import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeList } from "./routes";

const router = createBrowserRouter(routeList);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
