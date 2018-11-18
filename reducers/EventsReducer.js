const eventStates = {
    availableEvents: [
    {
        eventHostName: 'Johnny',
        eventTitle: 'POCKER & SALSA',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Joseph',
        eventTitle: 'POOL PARTY',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Patrick',
        eventTitle: 'STARCRAFT',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }, {
        eventHostName: 'Danny',
        eventTitle: 'DANISH GIRL',
        eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
            'Come visit us again soon and let us know how it goes.',
        eventDay: 'WED',
        eventTime: '7:00 PM',
        eventDate: 'SEPTEMBER 23',
        eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
        guestNums: 12,
        eventAway: 2.5,
        eventAddress: '123 Main St',
        eventWebsite: 'www.website.com',
        eventConfirmed: false
    }],
    confirmedEvents: [],

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

export const eventsReducer = (state = eventStates, action) => {

    const {
        availableEvents,
        confirmedEvents,
        currentUser,
    } = state;

    switch (action.type) {

        case 'CONFIRM_EVENT':
            const confirmedEvent = availableEvents[action.payload];
            confirmedEvent.eventConfirmed = true;
            confirmedEvents.push(confirmedEvent);
            availableEvents.splice(action.payload, 1);
            return {availableEvents, confirmedEvents};
        
        case 'SONGKICK_EVENT':
            const allEvents = action.payload;
            // allEvents.forEach((event) => {
            //     let oneEvent = {};
            //     oneEvent.eventHostName = event.displayName
            // })
            for (i = 0; i < allEvents.length; i++) {
                oneEvent = allEvents[i]
                let event = {};
                event.eventHostName = 'SongKick'
                event.eventTitle = oneEvent.displayName
                event.eventDescription = oneEvent.type
                event.eventDay = null
                event.eventTime = null
                event.eventDate = oneEvent.start.date
                event.eventHostPhoto = null
                event.guestNums = null
                event.eventAway = null
                event.eventAddress = oneEvent.venue.displayName + oneEvent.location.city
                event.eventWebsite = oneEvent.uri
                event.eventConfirmed = false
                availableEvents.push(event);
            }
            return {availableEvents, confirmedEvents};

        case 'CREATE_EVENT':
            const submittedEvent = action.payload;
            let confirmed = {};
            confirmed.eventHostName = 'Johnny';
            confirmed.eventTitle = submittedEvent.title;
            confirmed.eventDescription = submittedEvent.eventInfo;
            confirmed.eventDay = submittedEvent.startDayOfWeek;
            confirmed.eventDate = submittedEvent.startDate;
            confirmed.eventTime = submittedEvent.startTime;
            confirmed.eventHostPhoto = require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png');
            confirmed.guestNums = 'No guests yet';
            confirmed.eventAway = 2.5;
            confirmed.eventAddress = submittedEvent.location;
            confirmed.eventWebsite = 'www.website.com';
            confirmed.eventConfirmed = true;
            confirmed.isCurrentUserHost = true;

            confirmedEvents.push(confirmed);

            return {availableEvents, confirmedEvents};

        case 'SAVE_SEARCH_DISTANCE':
            const distance = action.payload;
            let user = currentUser;
            user.search_distance_km = distance;

            return {availableEvents, confirmedEvents, currentUser};

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