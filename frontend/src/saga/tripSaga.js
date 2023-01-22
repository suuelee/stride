import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  ACCEPT_STRIDE_REQUEST,
  END_STRIDE_REQUEST,
  GET_CURRENT_WALKER,
  GET_STRIDE_REQUEST,
  GET_TRIP,
  POST_TRIP,
  SET_CURRENT_TRIP,
  SET_CURRENT_WALKER,
  SET_STRIDE_REQUEST,
  START_STRIDE_REQUEST,
} from '../actions/tripActions';
import {
  acceptStrideRequestApi,
  endStrideRequestApi,
  getStrideRequestApi,
  getTripApi,
  getWalkerApi,
  postTripApi,
  startStrideRequestApi,
} from '../api/tripApi';

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
  if (
    currentTrip.data.status === 'progress' ||
    currentTrip.data.status === 'walking'
  ) {
    yield put({
      type: GET_CURRENT_WALKER,
      payload: currentTrip.data.striderId,
    });
  }
  yield delay(10000);
  yield put({type: GET_TRIP, payload: action.payload});
}

function* getStrideRequest() {
  const request = yield call(getStrideRequestApi);
  yield put({
    type: SET_STRIDE_REQUEST,
    payload: request.data,
  });
}

function* acceptStrideRequest(action) {
  yield call(acceptStrideRequestApi, action);
  yield call(getStrideRequest);
}

function* startStrideRequest(action) {
  yield call(startStrideRequestApi, action);
  yield call(getStrideRequest);
}

function* endStrideRequest(action) {
  yield call(endStrideRequestApi, action);
  yield call(getStrideRequest);
}

function* getCurrentWalker(action) {
  const currentWalker = yield call(getWalkerApi, action);
  yield put({
    type: SET_CURRENT_WALKER,
    payload: currentWalker.data,
  });
}

export function* tripSaga() {
  yield takeLatest(POST_TRIP, postTrip);
  yield takeEvery(GET_TRIP, getTrip);
  yield takeLatest(GET_STRIDE_REQUEST, getStrideRequest);
  yield takeLatest(ACCEPT_STRIDE_REQUEST, acceptStrideRequest);
  yield takeLatest(GET_CURRENT_WALKER, getCurrentWalker);
  yield takeLatest(START_STRIDE_REQUEST, startStrideRequest);
  yield takeLatest(END_STRIDE_REQUEST, endStrideRequest);
}
