import * as ActionType from '../actions';
import {FAILURE, REQUEST, SUCCESS} from '../constants/Action-Type';

const eventStates = {
    availableEvents: [],
    confirmedEvents: [],
    declinedEvents: [],
    loading: false
};

export const eventsReducer = (state = eventStates, action) => {
    switch (action.type) {
        case REQUEST(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                loading: true
            }
        case SUCCESS(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                availableEvents: [...state.availableEvents, ...action.payload.data.resultsPage.results.event],
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
            return {
                ...state,
                confirmedEvents: [...state.confirmedEvents, newEvent]
            };
        case 'CONFIRM_EVENT':
            console.log('confirm event', action.payload);
            return {
                ...state,
                confirmedEvents: [...state.confirmedEvents, state.availableEvents[action.payload]]
            }
        case 'DECLINE_EVENT':
            console.log('decline event', action.payload);
            return {
                ...state,
                declinedEvents: [...state.declinedEvents, state.availableEvents[action.payload]]
            }

        default:
            return state
    }
};