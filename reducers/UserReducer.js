const userStates = {
    currentUser: {
        first: 'Zac',
        last: null,
        about: 'Nam dapibus nisl vitae elit fringilla rutrum.\nAenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisle nunc et massa.',
        contact: 'Contact Info',
        photo1_url: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        photo2_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        photo3_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        photo4_url: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
        friend_ids: null,
        user_id: null,
        search_distance_km: 1,
        email: null,
    },
};

export const userReducer = (state = userStates, action) => {

    const { currentUser } = state;

    switch (action.type) {
        case 'SAVE_SEARCH_DISTANCE':
            const distance = action.payload;
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

        default:
            return state
    }
};