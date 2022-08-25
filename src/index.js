import React from "react";
import ReactDOM from "react-dom/client";
import "./MainSCSS.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
