import { createReducer } from "@reduxjs/toolkit";
import { getUser } from "actions";

interface IniteState {
  user: string;
}

const initeState: IniteState = {
  user: "",
};

export const dashboardReducer = createReducer(initeState, (builder) => {
  builder.addCase(getUser, (state, { payload }) => {
    state.user = payload;
  });
});
