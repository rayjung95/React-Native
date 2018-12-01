import * as ActionType from "./index";
import {HEADERS} from "../constants/ApiServices";

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

export const loadUserInfo = info => ({
    type: 'LOAD_USER_INFO',
    payload: info
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export const getUserBookings = userId => ({
    type: ActionType.GET_USER_BOOKINGS,
    payload: {
        client: 'rendevous',
        request: {
            url: `/user/${userId}/bookings`,
            headers: HEADERS
        }
    }
});
