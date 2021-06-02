import { createAction } from "@reduxjs/toolkit";
import { User } from "store/types";

export const getUser = createAction<User>("getUser");
