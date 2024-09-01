import { BrowserRouter } from "react-router-dom";
import { routeList } from "./routes";
import { Navigation } from "./component";
import { useAppDispatch, useAppSelector } from "./feature/store";
import loader from "./assets/loader.png";

import "./App.scss";
import { updateMessage } from "./feature/slices/globalSlice";

function App() {
  const { isLoading, message } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  if (message.text) {
    setTimeout(() => {
      dispatch(updateMessage());
    }, 3000);
  }
  return (
    <div className="app-container">
      <BrowserRouter>
        {isLoading && (
          <img src={loader} alt="loading ... " className="app-loader" />
        )}
        <Navigation />
        {routeList}
        <div className="app-message-container">
          <p
            className={`app-message ${
              message.type === "SUCCESS" ? "success" : "error"
            }`}
          >
            {message.text}
          </p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
