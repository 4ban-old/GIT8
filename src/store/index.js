import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import rootReducer from "./reducers";

const initialState = {};
const middleWare = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
