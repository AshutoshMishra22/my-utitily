import { BrowserRouter } from "react-router-dom";
import { routeList } from "./routes";
import "./App.scss";
import { Navigation } from "./component";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navigation />
        {routeList}
      </BrowserRouter>
    </div>
  );
}

export default App;
