import {combineReducers} from 'redux';
import {
  SET_CURRENT_TRIP,
  SET_CURRENT_WALKER,
  SET_LIVE_LOCATION,
  SET_LOADING,
  SET_STRIDE_REQUEST,
} from '../actions/tripActions';

const isLoadingDefault = false;
const defaultTrip = null;

const loadingReducer = (state = isLoadingDefault, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const currentTripReducer = (state = defaultTrip, action) => {
  switch (action.type) {
    case SET_CURRENT_TRIP:
      return action.payload;
    default:
      return state;
  }
};

const currentWalkerReducer = (state = defaultTrip, action) => {
  switch (action.type) {
    case SET_CURRENT_WALKER:
      return action.payload;
    default:
      return state;
  }
};

const requestListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STRIDE_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

const walkerLiveLocationReducer = (state = null, action) => {
  switch (action.type) {
    case SET_LIVE_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  loadingReducer,
  currentTripReducer,
  requestListReducer,
  currentWalkerReducer,
  walkerLiveLocationReducer,
});
