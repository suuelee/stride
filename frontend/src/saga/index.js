import { all, fork } from 'redux-saga/effects';
import { healthSaga } from './healthSaga';

export default function* rootSaga() {
  yield all([
    fork(healthSaga),
    // fork(tripSaga),
  ]);
}