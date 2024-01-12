import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
