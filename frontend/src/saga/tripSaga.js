import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_TRIP, POST_TRIP, SET_CURRENT_TRIP} from '../actions/tripActions';
import {getTripApi, postTripApi} from '../api/tripApi';

function* postTrip(action) {
  yield call(postTripApi, action);
  yield put({
    type: SET_CURRENT_TRIP,
    payload: action.payload,
  });
}

function* getTrip(action) {
  const currentTrip = yield call(getTripApi, action);
  yield put({
    type: SET_CURRENT_TRIP,
    payload: currentTrip.data.status === 'completed' ? null : currentTrip.data,
  });
  yield delay(10000);
  yield put({type: GET_TRIP, payload: action.payload});
}

export function* tripSaga() {
  yield takeLatest(POST_TRIP, postTrip);
  yield takeEvery(GET_TRIP, getTrip);
}
