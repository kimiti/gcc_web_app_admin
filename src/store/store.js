import { applyMiddleware, createStore, combineReducers, compose } from "redux";

import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import rootReducer from "../reducers/rootReducer";

const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
