import { AsyncStorage } from 'react-native';
import { FAILURE, REQUEST, SUCCESS } from '../constants/Action-Type';
import * as ActionType from '../actions';

// TODO: implement LOAD_USER_INFO on running the app

const userStates = {
    currentUser: {
        first: 'Zac',
        last: null,
        about: 'Nam dapibus nisl vitae elit fringilla rutrum.\nAenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisle nunc et massa.',
        contact: 'Contact Info',
        //photo1_url: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        photo1_url: null,
        //photo2_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        photo2_url: null,
        //photo3_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        photo3_url: null,
        //photo4_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        photo4_url: null,
        friend_ids: null,
        user_id: null,
        search_distance_km: 1,
        email: null,
        fbToken: null,
    },
    address: null,
    userLocation: null,

};

export const userReducer = (state = userStates, action) => {

    const { currentUser } = state;
    address = null;

    switch (action.type) {
        case 'GIVE_USER_LOCATION':
            let userLocation = action.payload;
            // console.log('location is ',userLocation);
            return{
                ...state,
                userLocation
            }

        case 'SET_NEW_ADDRESS':
            // console.log(action.payload);
            // let responseJson = action.payload.data;
            address = action.payload.formatted_address;
            // console.log(address);
            return {
                ...state,
                address,
            }
        case REQUEST(ActionType.GET_USER_ADDRESS):
            return {
                ...state
            }
        case SUCCESS(ActionType.GET_USER_ADDRESS):
            let responseJson = action.payload.data;
            address = responseJson.results[0].formatted_address;
            return {
                ...state,
                address
            }
        case FAILURE(ActionType.GET_USER_ADDRESS):
            return {
                ...state,
                error: 'Could not get location'
            }


        case 'SAVE_SEARCH_DISTANCE':
            const distance = action.payload;
            // console.log(distance);
            let user = currentUser;
            user.search_distance_km = distance;

            return state;

        case 'SAVE_PROFILE_DETAILS':
            const profileDetails = action.payload;
            let profile = currentUser;
            profile.about = profileDetails.profileBioText;
            profile.contact = profileDetails.contactInfoText;
            profile.photo1_url = profileDetails.imageSource[0];
            profile.photo2_url = profileDetails.imageSource[1];
            profile.photo3_url = profileDetails.imageSource[2];
            profile.photo4_url = profileDetails.imageSource[3];

            return state;

        case 'ADD_PROFILE_PHOTO':
            const photoURI = action.payload;
            let profilePhotos = currentUser;

            if (profilePhotos.photo1_url === null)
                profilePhotos.photo1_url = photoURI;
            else {
                if (profilePhotos.photo2_url === null)
                    profilePhotos.photo2_url = photoURI;
                else {
                    if (profilePhotos.photo3_url === null)
                        profilePhotos.photo3_url = photoURI;
                    else {
                        profilePhotos.photo4_url = photoURI;
                    }
                }
            }

            return state;

        // expect payload = { token: token, first: response.first_name, last: response.last_name,
        //    email: response.email, id: response.id, pic: response.picture.data.url }
        // Used: LoginScreen.js
        case 'SAVE_USER_LOGIN':
            let data = action.payload;
            let theUser = {
                token: data.token,
                desc: 'fb user token to use for graph api fetch'
            };
            AsyncStorage.setItem('userInfo', JSON.stringify(theUser));
            currentUser.fbToken = data.token;
            currentUser.first = data.first;
            currentUser.last = data.last;
            currentUser.email = data.email;
            currentUser.photo1_url = data.pic;
            currentUser.id = data.id;
            currentUser.isLoggedIn = true;

            return state;

        // For use in App.js to load saved token from AsyncStorage
        // Currenty not implemented
        // TODO: implement in App.js and refactor navigation for conditional initialRouteName
        case 'LOAD_USER_INFO':
            let info = JSON.parse(AsyncStorage.getItem('userInfo'));
            currentUser.fbToken = info.token;

            return state;

        // fetch to fb and remove permission, then clear token in asyncstorage
        // and clear state with null
        // Used: UserSettingScreen.js
        case 'LOGOUT_USER':
            const _logout = async () => {
                let lParams = `access_token=${currentUser.fbToken}`;
                await fetch(`https://graph.facebook.com/${currentUser.id}/permissions`, { method: 'DELETE', body: lParams });
                // console.log('LOGGING OUT...');
                await AsyncStorage.mergeItem('userInfo', JSON.stringify({ token: null }));
            }
            _logout();
            currentUser.isLoggedIn = false;
            currentUser.fbToken = null;
            currentUser.first = null;
            currentUser.last = null;
            currentUser.email = null;
            currentUser.photo1_url = require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png');
            currentUser.id = null;

            return state;

        default:
            return state
    }
};