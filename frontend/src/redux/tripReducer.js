import {combineReducers} from 'redux';
import {SET_LOADING} from '../actions/tripActions';

const isLoadingDefault = false;

const loadingReducer = (state = isLoadingDefault, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  loadingReducer,
});
