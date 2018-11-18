export const confirmEvent = eventIndex => ({
    type: 'CONFIRM_EVENT',
    payload: eventIndex
});

export const createEvent = event => ({
    type: 'CREATE_EVENT',
    payload: event
});

export const songKickEvent = event => ({
    type: 'SONGKICK_EVENT',
    payload:event
});

export const saveSearchDistance = settings => ({
	type: 'SAVE_SEARCH_DISTANCE',
	payload: settings
});

export const saveProfileDetails = details => ({
	type: 'SAVE_PROFILE_DETAILS',
	payload: details
});
