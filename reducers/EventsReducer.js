import * as ActionType from '../actions';
import {FAILURE, REQUEST, SUCCESS} from '../constants/Action-Type';

const eventStates = {
    availableEvents: [],
    confirmedEvents: [],
    myEvents: [],
    loading: false
};

export const eventsReducer = (state = eventStates, action) => {

    const {
        availableEvents,
        confirmedEvents,
        myEvents
    } = state;

    switch (action.type) {

        case REQUEST(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                loading: true
            }
        case SUCCESS(ActionType.GET_SONGKICK_EVENTS):
            let newAvailableEvents = availableEvents.concat(action.payload.data.resultsPage.results.event);
            return {
                ...state,
                availableEvents: newAvailableEvents,
                loading: false
            }
        case FAILURE(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                loading: false,
                error: 'Error while fetching songkick events'
            }
        case REQUEST(ActionType.CREATE_EVENT):
            return {
                ...state,
            };
        case SUCCESS(ActionType.CREATE_EVENT):
            let newEvent = action.payload.data.params;
            newEvent['isCurrentUserHost'] = true;
            confirmedEvents.push(newEvent);
            return {
                ...state
            };
        case 'CONFIRM_EVENT':
            const confirmedEvent = availableEvents[action.payload];
            confirmedEvents.push(confirmedEvent);
            availableEvents.splice(action.payload, 1);
            console.log(availableEvents);
            return state;

        default:
            return state
    }
};