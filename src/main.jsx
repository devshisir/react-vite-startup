import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/scss/App.scss";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ThemeMain from "./Theme/Index.js";
import { ConfigProvider } from "antd";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider wave={{ disabled: true }} theme={ThemeMain}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
