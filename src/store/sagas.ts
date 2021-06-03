import { call, put, take } from "redux-saga/effects";

import { signIn, signUp, getData } from "utils";
import * as A from "store/actions";
import * as T from "store/types";

function* authorizationUser({
  payload,
}: ReturnType<typeof A.authorizationUser>) {
  const user: T.User = yield call(signIn, payload.login, payload.password);

  console.log("user-response", user);

  yield put(A.setUser(user));
}

function* registerUser(login: string, password: string) {
  const response: T.User = yield call(signUp, login, password);

  console.log("response", response);
}

export default function* fetchUser() {
  yield take(A.authorizationUser, authorizationUser);
  yield take(A.registerUser, registerUser);
  //yield take(A.getUserData, getUserData);
}
