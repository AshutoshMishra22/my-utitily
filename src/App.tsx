import { BrowserRouter } from "react-router-dom";
import { routeList } from "./routes";
import { Navigation } from "./component";
import { useAppSelector } from "./feature/store";
import loader from "./assets/loader.png";

import "./App.scss";

function App() {
  const { isLoading } = useAppSelector((state) => state.global);
  return (
    <div className="app-container">
      <BrowserRouter>
        {isLoading && (
          <img src={loader} alt="loading ... " className="app-loader" />
        )}
        <Navigation />
        {routeList}
      </BrowserRouter>
    </div>
  );
}

export default App;
