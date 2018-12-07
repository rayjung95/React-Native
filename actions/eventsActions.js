import {HEADERS, SONGKICK_API_KEY} from '../constants/ApiServices';
import * as ActionType from './index';

export const confirmEvent = (user_id, event_id) => ({
    type: ActionType.REQUEST_BOOK_EVENT,
    payload: {
        client: 'rendevous',
        request: {
          url: `/booking?user_id=${user_id}&event_id=${event_id}`,
          headers: HEADERS
        }
      }
});

export const declineEvent = eventIndex => ({
    type: 'DECLINE_EVENT',
    payload: eventIndex
});

export const createEvent = event => ({
    type: ActionType.CREATE_EVENT,
    payload: {
        client: 'rendevous',
        request: {
            method: 'POST',
            url: '/event',
            headers: HEADERS,
            data: {
                "owner_id": event.ownerid,
                "name": event.title,
                "detail": event.eventInfo,
                "start": event.startDatetime,
                "end": event.endDatetime,
                "location_name": event.location,
                "lat": event.coordinate.latitude,
                "long": event.coordinate.longitude
            }
        }
    }
});

export const addToSongkickEvents = events => ({
    type: 'SONGKICK_EVENT',
    payload: events
});

export const getSongkickEvents = (searchDistance) => {
    return {
        type: ActionType.GET_SONGKICK_EVENTS,
        payload: {
            client: 'songkick',
            request: {
              url: `/events.json?apikey=${SONGKICK_API_KEY}&location=geo:49.286590,-123.115830&page=1&per_page=5`
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
  
