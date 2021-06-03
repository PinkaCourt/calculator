import { createReducer } from "@reduxjs/toolkit";
import * as A from "store/actions";
import * as T from "store/types";

export interface IniteState {
  user: T.User | null;
}

const initeState: IniteState = {
  user: null,
};

export const dashboardReducer = createReducer(initeState, (builder) => {
  builder.addCase(A.setUser, (state, { payload }) => {
    state.user = payload;
  });
});
