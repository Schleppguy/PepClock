import { combineReducers } from 'redux';
import EventContentReducer from './eventContentReducer';

const rootReducer = combineReducers({
  content: EventContentReducer
});

export default rootReducer;
