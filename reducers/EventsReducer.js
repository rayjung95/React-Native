const eventStates = {
    availableEvents: [{
        eventHostName: 'Johnny',
        eventTitle: 'POCKER & SALSA',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'POOL PARTY',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Patrick',
        eventTitle: 'STARCRAFT',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Danny',
        eventTitle: 'DANISH GIRL',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
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
            confirmed.eventDescription = submittedEvent.eventInfo;
            confirmed.eventDay = 'FRI';
            confirmed.eventDate = submittedEvent.start;
            confirmed.eventHostPhoto = require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png');
            confirmed.guestNums = 'No guests yet';
            confirmed.eventAway = 2.5;
            confirmed.eventAddress = submittedEvent.location;
            confirmed.eventWebsite = 'www.website.com';
            confirmed.eventConfirmed = true;
            confirmed.isCurrentUserHost = true;

            confirmedEvents.push(confirmed);

            return {availableEvents, confirmedEvents};

        default:
            return state
    }
};