import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import createAppStore from "./config/setupStore";

import AppLayout from "./pages/AppLayout/AppLayout";
import "./sass/base/_reset.scss";

const history = createBrowserHistory();
const store = createAppStore(history);

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppLayout />
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
