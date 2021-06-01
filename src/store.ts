import { createStore } from "redux";
import { dashboardReducer } from "reducer";

export const store = createStore(dashboardReducer);
