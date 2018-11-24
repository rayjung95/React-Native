import { SONGKICK_API_KEY, API_KEY } from '../constants/ApiServices';
import * as ActionType from './index';
import { HEADERS } from '../constants/ApiServices';

export const confirmEvent = eventIndex => ({
    type: 'CONFIRM_EVENT',
    payload: eventIndex
});

export const declineEvent = eventIndex => ({
  type: 'DECLINE_EVENT',
  payload: eventIndex
});

export const createEvent = event => ({
    type: 'CREATE_EVENT',
    payload: event
});

export const addToSongkickEvents = events => ({
    type: 'SONGKICK_EVENT',
    payload: events
});

export const getSongkickEvents = () => {
    return {
      type: ActionType.GET_SONGKICK_EVENTS,
      payload: {
        client: 'songkick',
        request: {
          url: `/events.json?apikey=${SONGKICK_API_KEY}&location=geo:49.286590,-123.115830&page=1&per_page=10`
        }
      }
    };
  }

  export const getEvents = (user_id = 205, latitude =49.2834317, longitude = -123.11491930000001, search_distance = 10000) => {
    return {
      type: ActionType.GET_EVENTS,
      payload: {
        client: 'rendevous',
        request: {
          url: `/event?user_id=${user_id}&latitude=${latitude}&longitude=${longitude}&search_distance=${search_distance}`,
          headers: HEADERS
        }
      }
    };
  }
  