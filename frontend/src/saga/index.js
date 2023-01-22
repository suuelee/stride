import { all, fork } from 'redux-saga/effects';
import { healthSaga } from './healthSaga';
import { tripSaga } from './tripSaga';

export default function* rootSaga() {
  yield all([
    fork(healthSaga),
    fork(tripSaga),
  ]);
}