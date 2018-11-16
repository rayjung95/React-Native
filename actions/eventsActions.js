export const confirmEvent = eventIndex => ({
    type: 'CONFIRM_EVENT',
    payload: eventIndex
});

export const createEvent = event => ({
    type: 'CREATE_EVENT',
    payload: event
});

export const saveSearchDistance = settings => ({
	type: 'SAVE_SEARCH_DISTANCE',
	payload: settings
});