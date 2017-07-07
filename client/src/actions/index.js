import axios from 'axios';
export const GET_EVENT_CONTENT = 'GET_EVENT_CONTENT';

export const getEventContent = function(eventId) {
  const request = axios.get(`/api/events/${eventId}`);

  return {
    type: GET_EVENT_CONTENT,
    payload: request
  };

};
