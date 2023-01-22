import {combineReducers} from 'redux';
import {SET_CURRENT_TRIP, SET_LOADING} from '../actions/tripActions';

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

export default combineReducers({
  loadingReducer,
  currentTripReducer
});
