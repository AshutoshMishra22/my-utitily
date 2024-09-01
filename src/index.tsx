import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { store } from "./feature/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./component/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);
