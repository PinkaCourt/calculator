import { createAction } from "@reduxjs/toolkit";
import { User, Data } from "store/types";

export const authorizationUser =
  createAction<{ login: string; password: string }>("authorizationUser");

export const setUser = createAction<User>("setUser");

export const registerUser =
  createAction<{ login: string; password: string }>("registerUser");

export const getUserData = createAction<string>("getUserData");

export const setUserData = createAction<Data[]>("setUserData");
