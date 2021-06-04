import { createAction } from "@reduxjs/toolkit";
import * as T from "store/types";

export const authorizationUser =
  createAction<{ login: string; password: string }>("authorizationUser");

// должно быть только  accessToken и  auth
export const setAuth = createAction<T.UserAuth>("setAuth");
export const setLogin = createAction<string>("setLogin");

export const registerUser =
  createAction<{ login: string; password: string }>("registerUser");

export const getUserData = createAction("getUserData");
export const setUserData = createAction<T.Data[]>("setUserData");

export const getUserProfile = createAction("getUserProfile");
export const setUserProfile = createAction<T.User>("setUserProfile");

export const updateUserAvatar = createAction("updateUserAvatar");

export const updateUserName = createAction("updateUserName");
