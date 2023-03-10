import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { logger } from "./modules";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
