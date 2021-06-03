import { createReducer } from "@reduxjs/toolkit";
import * as A from "store/actions";
import * as T from "store/types";

export interface IniteState {
  user: T.User | null;
  data: T.Data[];
}

const initeState: IniteState = {
  user: null,
  data: [],
};

export const dashboardReducer = createReducer(initeState, (builder) => {
  builder
    .addCase(A.setUser, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(A.setUserData, (state, { payload }) => {
      state.data = payload;
    });
});
