import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import * as reducers from "../store/reducers";

function createAppStore(history) {
    // combine all reducers
    const appReducers = combineReducers({
        ...reducers,

        // this is needed to connect app routes
        // to redux states
        router: connectRouter(history)
    });

    const store = createStore(
        appReducers,
        {},

        // middlewares
        composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
    );

    return store;
}

export default createAppStore;
