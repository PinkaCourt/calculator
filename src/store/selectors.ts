import { IniteState } from "store/reducer";

export const selectUser = (state: IniteState) => state.user;

export const selectData = (state: IniteState) => state.data;
