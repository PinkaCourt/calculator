import { createStore } from "redux";
import { dashboardReducer } from "store/reducer";

export const store = createStore(dashboardReducer);
