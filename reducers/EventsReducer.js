import * as ActionType from '../actions';
import {FAILURE, REQUEST, SUCCESS} from '../constants/Action-Type';

const eventStates = {
    availableEvents: [],
    confirmedEvents: [],
    declinedEvents: [],
    loading: false,
    error: null,
};

export const eventsReducer = (state = eventStates, action) => {
    switch (action.type) {
        case REQUEST(ActionType.GET_SONGKICK_EVENTS):
        case REQUEST(ActionType.GET_EVENTS):
        case REQUEST(ActionType.CREATE_EVENT):
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
        case SUCCESS(ActionType.GET_EVENTS):
            // console.log('Events!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', action.payload.data.events)
            return {
                ...state,
                availableEvents: [...state.availableEvents, ...action.payload.data.events],
                loading: false
            }
        case SUCCESS(ActionType.CREATE_EVENT):
            return {
                ...state,
                confirmedEvents: [...state.confirmedEvents, action.payload.data.params]
            };
        case FAILURE(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                loading: false,
                error: 'Error while fetching songkick events'
            }
        case 'CONFIRM_EVENT':
            return {
                ...state,
                confirmedEvents: [...state.confirmedEvents, state.availableEvents[action.payload]]
            }
        case 'DECLINE_EVENT':
            return {
                ...state,
                declinedEvents: [...state.declinedEvents, state.availableEvents[action.payload]]
            }
        default:
            return state
    }
};