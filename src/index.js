import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import { createLogger } from "redux-logger";
import * as serviceWorker from "./serviceWorker";

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { searchFieldReducer, fetchRobotsReducer } from "./reducers";
//Middleware for monitoring the actions.
const logger = createLogger();

const reducers = combineReducers({
  searchField: searchFieldReducer,
  fetchRobots: fetchRobotsReducer
});
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
