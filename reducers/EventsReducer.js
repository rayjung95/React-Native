const initialState = {
    available: [{
        eventHostName: 'Zac',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: false
    }, {
        eventHostName: 'Quentin',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: false
    }, {
        eventHostName: 'Johnny',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: false
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'Pocker and Salsa',
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