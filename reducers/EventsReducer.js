const initialState = {
    available: [{
        eventHostName: 'Zac',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: false
    }, {
        eventHostName: 'Quentin',
        eventTitle: 'Pocker and Salsa',
        eventConfirmed: false
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
        default:
            return state
    }
};