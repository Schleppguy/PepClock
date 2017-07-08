import { UPDATE_CONTRIBUTIONS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case UPDATE_CONTRIBUTIONS:
    return action.payload.data;
  default: 
    return state;
  }
}
