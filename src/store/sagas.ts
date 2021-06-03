import { call, put, takeEvery } from "redux-saga/effects";

import { signIn, signUp, getData } from "utils";
import * as A from "store/actions";
import * as T from "store/types";

function* authorizationUser({
  payload,
}: ReturnType<typeof A.authorizationUser>) {
  const user: T.User = yield call(signIn, payload.login, payload.password);

  yield put(A.setUser(user));
}

function* registerUser({ payload }: ReturnType<typeof A.registerUser>) {
  const response: T.User = yield call(signUp, payload.login, payload.password);
}

function* getUserData({ payload }: ReturnType<typeof A.setUser>) {
  const data: T.serverDataUser = yield call(
    getData,
    payload.email,
    payload.accessToken
  );

  yield put(A.setUserData(data.items));
}

export default function* fetchUser() {
  yield takeEvery(A.authorizationUser, authorizationUser);

  yield takeEvery(A.registerUser, registerUser);
  yield takeEvery(A.setUser, getUserData);
}
