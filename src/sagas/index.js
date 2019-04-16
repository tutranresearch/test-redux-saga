import { call, put, takeEvery } from 'redux-saga/effects';

import { 
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../constants';

function signinApi(user_name, password) {
  return {
    message: 'message from signinApi'
  }
}

function *signinUser(action) {
   try {
      const { message } = yield call(signinApi, action.user_name, action.password);

      console.log("message", message)

      yield put({
        type: SIGNIN_SUCCESS,
        message
      });
   } catch (e) {
      yield put({
        type: SIGNIN_FAILURE,
        message: e.message
      });
   }
}

/*************************************************************/
/*************************************************************/
/*************************************************************/

function *signinUserWatcher() {
  yield takeEvery(SIGNIN_REQUEST, signinUser);
}

export { signinUserWatcher };
