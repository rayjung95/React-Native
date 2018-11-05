const eventStates = {
    availableEvents: [{
        eventHostName: 'Johnny',
        eventTitle: 'POCKER & SALSA',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'POOL PARTY',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'Patrick',
        eventTitle: 'STARCRAFT',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'Danny',
        eventTitle: 'DANISH GIRL',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }],
    confirmedEvents: []
};

export const eventsReducer = (state = eventStates, action) => {

    const {
        availableEvents,
        confirmedEvents
    } = state;

    switch (action.type) {

        case 'CONFIRM_EVENT':
            const confirmedEvent = availableEvents[action.payload];
            confirmedEvent.eventConfirmed = true;
            confirmedEvents.push(confirmedEvent);
            // availableEvents.splice(action.payload, 1);
            return {availableEvents, confirmedEvents};

        case 'CREATE_EVENT':
            const submittedEvent = action.payload;
            let confirmed = {};
            confirmed.eventHostName = 'Johnny';
            confirmed.eventTitle = submittedEvent.title;
            confirmed.eventDay = 'FRI';
            confirmed.eventDate = 'FEBRUARY 30';
            confirmed.eventHostPhoto = require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png');
            confirmed.guestNums = 'No guests yet';
            confirmed.eventAway = 2.5;

            confirmedEvents.push(confirmed);

            return {availableEvents, confirmedEvents};

        default:
            return state
    }
};