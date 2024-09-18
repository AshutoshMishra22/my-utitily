import { BrowserRouter } from "react-router-dom";
import { routeList } from "./routes";
import { Navigation } from "./component";
import { useAppDispatch, useAppSelector } from "./feature/store";
import loader from "./assets/loader.png";

import "./App.scss";
import { updateMessage } from "./feature/slices/globalSlice";

const addMaximumScaleToMetaViewport = () => {
  const el = document.querySelector("meta[name=viewport]");

  if (el !== null) {
    let content = el.getAttribute("content") as string;
    let re = /maximum-scale=[0-9]+/g;

    if (re.test(content)) {
      content = content.replace(re, "maximum-scale=1.0");
    } else {
      content = [content, "maximum-scale=1.0"].join(", ");
    }

    el.setAttribute("content", content);
  }
};

const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;

function App() {
  const { isLoading, message } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  if (message.text) {
    setTimeout(() => {
      dispatch(updateMessage());
    }, 3000);
  }
  //Check if it is an iPad, iPhone or iPod
  const checkIsIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (checkIsIOS()) {
    disableIosTextFieldZoom();
  }
  return (
    <div className="app-container">
      <BrowserRouter>
        <h1>{checkIsIOS()}</h1>
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
