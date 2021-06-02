import { createReducer } from "@reduxjs/toolkit";
import { getUser } from "store/actions";
import { User } from "store/types";

export interface IniteState {
  user: User | null;
}

const initeState: IniteState = {
  user: null,
};

export const dashboardReducer = createReducer(initeState, (builder) => {
  builder.addCase(getUser, (state, { payload }) => {
    state.user = payload;
  });
});
