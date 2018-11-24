import * as ActionType from '../actions';
import {FAILURE, REQUEST, SUCCESS} from '../constants/Action-Type';

const eventStates = {
    availableEvents: [],
    confirmedEvents: [],
    declinedEvents: [],
    loading: false
};

export const eventsReducer = (state = eventStates, action) => {

    const {
        availableEvents,
        confirmedEvents,
        songKickEvents
    } = state;

    switch (action.type) {

        case REQUEST(ActionType.GET_SONGKICK_EVENTS):
        case REQUEST(ActionType.GET_EVENTS):
            return {
                ...state,
                loading: true
            }
        case SUCCESS(ActionType.GET_SONGKICK_EVENTS):
            // let newAvailableEvents = availableEvents.concat(action.payload.data.resultsPage.results.event);
            return {
                ...state,
                availableEvents: [...state.availableEvents, ...action.payload.data.resultsPage.results.event],
                loading: false
            }
        case SUCCESS(ActionType.GET_EVENTS):
            console.log('Events!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', action.payload.data.events)
            return {
                ...state,
                availableEvents: [...state.availableEvents, ...action.payload.data.events],
                loading: false
            }
        case FAILURE(ActionType.GET_SONGKICK_EVENTS):
            return {
                ...state,
                loading: false,
                error: 'Error while fetching songkick events'
            }
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

        // case 'SONGKICK_EVENT':
        //     availableEvents.push(action.payload);
        //     return state;

        case 'CREATE_EVENT':
            const submittedEvent = action.payload;
            let confirmed = {};
            confirmed.eventHostName = 'Johnny';
            confirmed.eventTitle = submittedEvent.title;
            confirmed.eventDescription = submittedEvent.eventInfo;
            confirmed.eventDay = submittedEvent.startDayOfWeek;
            confirmed.eventDate = submittedEvent.startDate;
            confirmed.eventTime = submittedEvent.startTime;
            confirmed.eventHostPhoto = require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png');
            confirmed.guestNums = 'No guests yet';
            confirmed.eventAway = 2.5;
            confirmed.eventAddress = submittedEvent.location;
            confirmed.eventWebsite = 'www.website.com';
            confirmed.eventConfirmed = true;
            confirmed.isCurrentUserHost = true;

            confirmedEvents.push(confirmed);

            return state;

        default:
            return state
    }
};