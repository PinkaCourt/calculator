import { call, fork, put, select, takeEvery } from "redux-saga/effects";

import {
  signIn,
  signUp,
  getData,
  getProfile,
  updateAvatar,
  updateName,
} from "utils";
import * as A from "store/actions";
import * as S from "store/selectors";
import * as T from "store/types";

function* authorizationUser({
  payload,
}: ReturnType<typeof A.authorizationUser>) {
  const user: T.UserAuth = yield call(signIn, payload.login, payload.password);

  if (!user.error) {
    yield put(A.setLogin(payload.login));
    yield put(A.setAuth(user));
    yield call(getUserProfile);
    yield call(getUserData);
  } else {
    yield put(A.setLogout());
  }
}

function* registerUser({ payload }: ReturnType<typeof A.registerUser>) {
  const { message } = yield call(signUp, payload.login, payload.password);

  yield fork(A.authorizationUser, payload);
}

function* getUserData() {
  const login: ReturnType<typeof S.selectLogin> = yield select(S.selectLogin);
  const token: ReturnType<typeof S.selectToken> = yield select(S.selectToken);

  const data: T.serverDataUser = yield call(getData, login, token);

  yield put(A.setUserData(data.items));
}

function* getUserProfile() {
  const userId: ReturnType<typeof S.selectLogin> = yield select(S.selectLogin);
  const token: ReturnType<typeof S.selectToken> = yield select(S.selectToken);

  const profile: T.User = yield call(getProfile, userId, token);

  yield put(A.setUserProfile(profile));
}

function* updateUserAvatar({ payload }: ReturnType<typeof A.updateUserAvatar>) {
  const userId: ReturnType<typeof S.selectLogin> = yield select(S.selectLogin);
  const token: ReturnType<typeof S.selectToken> = yield select(S.selectToken);

  yield call(updateAvatar, userId, token, payload);
  yield call(getUserProfile);
}

function* updateUserName({ payload }: ReturnType<typeof A.updateUserName>) {
  const userId: ReturnType<typeof S.selectLogin> = yield select(S.selectLogin);
  const token: ReturnType<typeof S.selectToken> = yield select(S.selectToken);

  yield call(updateName, userId, token, payload);
  yield call(getUserProfile);
}

export default function* fetchUser() {
  yield takeEvery(A.authorizationUser, authorizationUser);
  yield takeEvery(A.registerUser, registerUser);
  yield takeEvery(A.updateUserAvatar, updateUserAvatar);
  yield takeEvery(A.updateUserName, updateUserName);
}
