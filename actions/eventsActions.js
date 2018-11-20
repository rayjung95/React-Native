export const confirmEvent = eventIndex => ({
    type: 'CONFIRM_EVENT',
    payload: eventIndex
});

export const createEvent = event => ({
    type: 'CREATE_EVENT',
    payload: event
});

export const addToSongkickEvents = event => ({
    type: 'SONGKICK_EVENT',
    payload: event
});
