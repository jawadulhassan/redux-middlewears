import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_HELLO_WORLD, RECIEVE_HELLO_WORLD } from "./actions";

// worker saga: will be fired on USER_FETCH_REQUEST actions

function* helloWorld(action) {
  try {
    // do api call
    // const user = yield call(API.fetchUser, action.payload.userId);
    yield put({
      type: RECIEVE_HELLO_WORLD,
      text: "Hello world from redux saga!"
    });
  } catch (e) {
    yield put({
      type: RECIEVE_HELLO_WORLD,
      text: "Hello world from redux saga!"
    });
  }
}

/* 
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets dispatch while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
*/

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
