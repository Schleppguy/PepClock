import { GET_EVENT_CONTENT } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
  case GET_EVENT_CONTENT:
    return Object.assign(action.payload.data);
  default: 
    return state;
  }
}
