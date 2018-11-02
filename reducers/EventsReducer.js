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
        eventConfirmed: true
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: true
    }],
    confirmed: [{
        eventHostName: 'Johnny',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: true
    }, {
        eventHostName: 'Zac',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: true
    },
        {
            eventHostName: 'Quentin',
            eventTitle: 'Pocker and Salsa',
            eventConfirmed: true
        }]
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONFIRM_EVENT':
            const {
                available,
                confirmed
            } = state;
            const confirmedEvent = available.splice(action.payload, 1);
            confirmed.push(confirmedEvent);

            return {available, confirmed};

        default:
            return state
    }
};