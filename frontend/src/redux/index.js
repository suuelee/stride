import {combineReducers} from 'redux';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({
  tripReducer,
});

export default rootReducer;
