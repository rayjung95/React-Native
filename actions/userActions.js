export const saveSearchDistance = settings => ({
    type: 'SAVE_SEARCH_DISTANCE',
    payload: settings
});

export const saveProfileDetails = details => ({
    type: 'SAVE_PROFILE_DETAILS',
    payload: details
});

export const addProfilePhoto = photoURI => ({
	type: 'ADD_PROFILE_PHOTO',
	payload: photoURI,
});

export const saveUserLogin = login => ({
    type: 'SAVE_USER_LOGIN',
    payload: login
});

export const loadUserInfo = () => ({
    type: 'LOAD_USER_INFO'
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})