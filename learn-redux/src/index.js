import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
