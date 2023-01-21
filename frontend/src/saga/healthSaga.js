import {put, takeLatest} from 'redux-saga/effects';
import {GET_HEALTH} from '../actions/healthActions';
import {SET_LOADING} from '../actions/tripActions';

function* getHealth(action) {
  // Call API
  yield put({type: SET_LOADING, payload: true});
}

export function* healthSaga() {
  yield takeLatest(GET_HEALTH, getHealth);
}
