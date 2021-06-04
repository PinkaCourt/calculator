import { IniteState } from "store/reducer";

export const selectToken = (state: IniteState) => state.accessToken;
export const selectAuth = (state: IniteState) => state.auth;
export const selectLogin = (state: IniteState) => state.login;
export const selectUser = (state: IniteState) => state.user;
export const selectData = (state: IniteState) => state.data;
