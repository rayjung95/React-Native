import {SONGKICK_API_KEY} from '../constants/ApiServices';
import * as ActionType from './index';

export const confirmEvent = eventIndex => ({
    type: 'CONFIRM_EVENT',
    payload: eventIndex
});

//ec2-34-221-16-108.us-west-2.compute.amazonaws.com/event?
// owner_id=205&name=RayCreatedTest&detail=RayDetail&start=2018-11-17T06:00:00.000Z
// &end=2018-14-17T10:00:00.000Z&location_name=23157–23333 Billy Brown Rd, Langley
// &lat=49.171452&long=-122.5791
export const createEvent = event => ({
    type: ActionType.CREATE_EVENT,
    payload: {
        client: 'rendevous',
        request: {
            method: 'POST',
            url: '/event',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'j05wd2ae49d212578ef13cb607cef64b',
                'sessiontoken': 'Kw/xlaGwyV/6mmf6CF2oxo9Y4eqokxzO'
            },
            data: {
                "owner_id": event.ownerid,
                "name": event.title,
                "detail": event.eventInfo,
                "start": event.startDatetime,
                "end": event.endDatetime,
                "location_name": event.location,
                "lat": 49.171452,
                "long": -122.5791
            }
        }
    }
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
                url: `/events.json?apikey=${SONGKICK_API_KEY}&location=geo:49.286590,-123.115830`
            }
        }
    };
}