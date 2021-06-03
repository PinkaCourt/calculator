import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { dashboardReducer } from "store/reducer";

import fetchUser from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  dashboardReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchUser);
