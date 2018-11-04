const initialState = {
    available: [{
        eventHostName: 'Sam',
        eventTitle: 'POCKER & SALSA',
        eventType: 'Party',
        eventDay: 'WED',
        eventTime: '7:00',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'Marvin',
        eventTitle: 'World of Warcraft',
        eventType: 'Party',
        eventDay: 'WED',
        eventTime: '7:00',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'David',
        eventTitle: 'POCKER & SALSA',
        eventType: 'Party',
        eventDay: 'WED',
        eventTime: '7:00',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'POCKER & SALSA',
        eventType: 'Party',
        eventDay: 'WED',
        eventTime: '7:00',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
        guestNums: 12,
        eventAway: 2.5,
        eventConfirmed: false
    }],
    confirmed: []
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONFIRM_EVENT':
            const {
                available,
                confirmed
            } = state;
            const confirmedEvent = available[action.payload];
            confirmedEvent.eventConfirmed = true;
            confirmed.push(confirmedEvent);
            // available.splice(action.payload, 1);

            return {available, confirmed};

        default:
            return state
    }
};