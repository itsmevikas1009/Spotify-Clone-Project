import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import { persistor, store } from "./redux/store.js";
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <PersistGate persistor={persistor}>
  <Provider store={store}>
    <App />
  </Provider>
  // </PersistGate>,
);
