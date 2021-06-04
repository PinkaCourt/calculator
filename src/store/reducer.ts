import { createReducer } from "@reduxjs/toolkit";
import * as A from "store/actions";
import * as T from "store/types";

export interface IniteState {
  accessToken: string;
  auth: boolean;
  login: string;
  user: T.User | null;
  data: T.Data[];
}

const initeState: IniteState = {
  accessToken: "",
  auth: false,
  login: "",
  user: null,
  data: [],
};

export const dashboardReducer = createReducer(initeState, (builder) => {
  builder
    .addCase(A.setAuth, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.auth = payload.auth;
    })
    .addCase(A.setLogin, (state, { payload }) => {
      state.login = payload;
    })
    .addCase(A.setUserProfile, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(A.setUserData, (state, { payload }) => {
      state.data = payload;
    });
});
