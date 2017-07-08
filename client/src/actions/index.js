import axios from 'axios';
export const GET_EVENT_CONTENT = 'GET_EVENT_CONTENT';
export const UPDATE_CONTRIBUTIONS = 'UPDATE_CONTRIBUTIONS';

export const getEventContent = function(eventId) {
  const request = axios.get(`/api/events/${eventId}`);

  return {
    type: GET_EVENT_CONTENT,
    payload: request
  };

};

export const updateContributions = function(eventId) {
  const request = axios.get(`/api/contributions/events/${eventId}`);

  return {
    type: UPDATE_CONTRIBUTIONS,
    payload: request
  };

};
