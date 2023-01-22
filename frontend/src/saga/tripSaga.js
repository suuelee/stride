import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  ACCEPT_STRIDE_REQUEST,
  END_STRIDE_REQUEST,
  GET_COORDINATES,
  GET_CURRENT_WALKER,
  GET_LIVE_LOCATION,
  GET_STRIDE_REQUEST,
  GET_TRIP,
  POST_TRIP,
  SEND_LIVE_LOCATION,
  SET_CURRENT_TRIP,
  SET_CURRENT_WALKER,
  SET_LIVE_LOCATION,
  SET_STRIDE_REQUEST,
  START_STRIDE_REQUEST,
} from '../actions/tripActions';
import {
  acceptStrideRequestApi,
  endStrideRequestApi,
  getCoordinatesApi,
  getLiveLocationApi,
  getStrideRequestApi,
  getTripApi,
  getWalkerApi,
  postTripApi,
  sendLiveLocationApi,
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
  if (currentTrip.data !== null) {
    const location = yield call(
      getCoordinatesApi,
      currentTrip.data.dropoffAddress,
    );
    yield put({
      type: SET_CURRENT_TRIP,
      payload:
        currentTrip.data.status === 'completed'
          ? null
          : {...currentTrip.data, dropoffCoord: location},
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
  }
  yield delay(10000);
  yield put({type: GET_TRIP, payload: action.payload});
}

function* getStrideRequest() {
  const request = yield call(getStrideRequestApi);
  const coordList = yield all(
    request.data.map(option => {
      return call(getCoordinatesApi, option.dropoffAddress);
    }),
  );
  const finalList = request.data.map((option, index) => {
    return {...option, dropoffCoord: coordList[index]};
  });
  yield put({
    type: SET_STRIDE_REQUEST,
    payload: finalList,
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

function* getCoordinates(action) {
  yield call(getCoordinatesApi, action);
}

function* sendLiveLocation(action) {
  yield call(sendLiveLocationApi, action);
  yield delay(30000);
  yield call(sendLiveLocation, action);
}

function* getLiveLocation(action) {
  const location = yield call(getLiveLocationApi, action);
  yield put({
    type: SET_LIVE_LOCATION,
    payload: location.data,
  });
  yield call(getLiveLocation, action);
}

export function* tripSaga() {
  yield takeLatest(POST_TRIP, postTrip);
  yield takeEvery(GET_TRIP, getTrip);
  yield takeLatest(GET_STRIDE_REQUEST, getStrideRequest);
  yield takeLatest(ACCEPT_STRIDE_REQUEST, acceptStrideRequest);
  yield takeLatest(GET_CURRENT_WALKER, getCurrentWalker);
  yield takeLatest(START_STRIDE_REQUEST, startStrideRequest);
  yield takeLatest(END_STRIDE_REQUEST, endStrideRequest);
  yield takeLatest(GET_COORDINATES, getCoordinates);
  yield takeLatest(SEND_LIVE_LOCATION, sendLiveLocation);
  yield takeLatest(GET_LIVE_LOCATION, getLiveLocation);
}
