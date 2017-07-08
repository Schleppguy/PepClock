import { combineReducers } from 'redux';
import EventContentReducer from './eventContentReducer';
import UpdateContributionsReducer from './updateContributionsReducer';

const rootReducer = combineReducers({
  content: EventContentReducer,
  contributions: UpdateContributionsReducer
});

export default rootReducer;
