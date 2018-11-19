const eventStates = {
    availableEvents: [{
        "status": true,
        "message": "Hi.",
        "event": {
            "id": 1,
            "name": "first event",
            "location_name": "10 Summer St, Pawtucket, RI  02860, United States",
            "detail": "Fun times",
            "lat": 41.878506,
            "long": -71.384548,
            "start": "2018-05-12T19:05:00.000Z",
            "end": "2018-06-24T20:10:00.000Z",
            "contact": "",
            "owner": {
                "first": "Gregory",
                "last": "Fajen",
                "about": "",
                "contact": "",
                "photo1_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/67e7db6ef1505e14a90b87c2dc17dc85",
                "photo2_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/dc3aa513d7504ced9c7ff22fb435feb9",
                "photo3_url": "",
                "photo4_url": "",
                "friend_ids": "10154643370822011",
                "user_id": 1
            },
            "guests": [
                {
                    "first": "Gregory",
                    "last": "Fajen",
                    "about": "",
                    "contact": "",
                    "photo1_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/67e7db6ef1505e14a90b87c2dc17dc85",
                    "photo2_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/dc3aa513d7504ced9c7ff22fb435feb9",
                    "photo3_url": "",
                    "photo4_url": "",
                    "friend_ids": "10154643370822011",
                    "user_id": 1
                },
                {
                    "first": "Austin",
                    "last": "Ross",
                    "about": "I bet the founders of rendevous are dicks! \n\nHahahaha jk \n\n👌",
                    "contact": "",
                    "photo1_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/7577bcaa16d53b90341e2dad195b2306",
                    "photo2_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/a4e0e9e90ec57435113b8e3442b91ed6",
                    "photo3_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/0750df28f58d34059444ae0564e43165",
                    "photo4_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/cc6e58c631d48b4f8b9747781f7d2f8b",
                    "friend_ids": "1",
                    "user_id": 2
                },
                {
                    "first": "Rustin",
                    "last": "Gresh",
                    "about": "",
                    "contact": "",
                    "photo1_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/9a7cb8aa60728e5eb9f6cf9fed40c7e7",
                    "photo2_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/caa1368123d0959c8b6ba289a3be2890",
                    "photo3_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/5c70d25a2c5d7a20ba5e304906b67fa2",
                    "photo4_url": "",
                    "friend_ids": "10154643370822011_10216911542040345_10217270406819355",
                    "user_id": 3
                }
            ],
            "pending_guests": [
                {
                    "first": "Dave",
                    "last": "Adeagbosky",
                    "about": "Im a super chill person, or atleast that's what I think. 😉😂",
                    "contact": "",
                    "photo1_url": "https://s3-us-west-2.amazonaws.com/rendevous/images/simple/a46b1fbb4f773daf4174774b12149a5b",
                    "photo2_url": "",
                    "photo3_url": "",
                    "photo4_url": "",
                    "friend_ids": null,
                    "user_id": 4
                }
            ],
            "pending_guest_count": 1,
            "group_chat_room_id": 1
        },
        "bookings": [
            {
                "id": 1,
                "user_id": 1,
                "event_id": 1,
                "approved": true,
                "declined": false,
                "created_at": "2018-05-12T19:27:08.634Z",
                "updated_at": "2018-05-12T19:31:53.297Z"
            },
            {
                "id": 4,
                "user_id": 3,
                "event_id": 1,
                "approved": true,
                "declined": false,
                "created_at": "2018-05-25T21:16:05.086Z",
                "updated_at": "2018-05-29T18:37:44.309Z"
            },
            {
                "id": 2,
                "user_id": 2,
                "event_id": 1,
                "approved": true,
                "declined": true,
                "created_at": "2018-05-13T16:11:26.777Z",
                "updated_at": "2018-05-30T21:32:15.660Z"
            },
            {
                "id": 16,
                "user_id": 4,
                "event_id": 1,
                "approved": false,
                "declined": false,
                "created_at": "2018-06-04T19:20:48.484Z",
                "updated_at": "2018-06-04T19:20:48.484Z"
            }
        ],
        "guests": [
            {
                "id": 1,
                "created_at": "2018-05-12T19:00:38.489Z",
                "updated_at": "2018-07-17T21:42:33.430Z",
                "email": "gregfajen@gmail.com",
                "search_distance_km": 126.465427181091
            },
            {
                "id": 2,
                "created_at": "2018-05-12T19:04:48.968Z",
                "updated_at": "2018-11-14T18:58:59.803Z",
                "email": "austinross829@gmail.com",
                "search_distance_km": 102.296921357651
            },
            {
                "id": 3,
                "created_at": "2018-05-25T21:14:46.305Z",
                "updated_at": "2018-08-15T20:06:59.742Z",
                "email": "rustingresiuk@aol.com",
                "search_distance_km": 23.8364701716614
            },
            {
                "id": 4,
                "created_at": "2018-06-04T19:13:48.874Z",
                "updated_at": "2018-06-28T19:54:53.216Z",
                "email": "pivdzoaufb_1528139549@tfbnw.net",
                "search_distance_km": 100.194393152313
            }
        ],
        "confirmed": [
            {
                "id": 1,
                "created_at": "2018-05-12T19:00:38.489Z",
                "updated_at": "2018-07-17T21:42:33.430Z",
                "email": "gregfajen@gmail.com",
                "search_distance_km": 126.465427181091
            },
            {
                "id": 2,
                "created_at": "2018-05-12T19:04:48.968Z",
                "updated_at": "2018-11-14T18:58:59.803Z",
                "email": "austinross829@gmail.com",
                "search_distance_km": 102.296921357651
            },
            {
                "id": 3,
                "created_at": "2018-05-25T21:14:46.305Z",
                "updated_at": "2018-08-15T20:06:59.742Z",
                "email": "rustingresiuk@aol.com",
                "search_distance_km": 23.8364701716614
            }
        ],
        "pending": [
            {
                "id": 4,
                "created_at": "2018-06-04T19:13:48.874Z",
                "updated_at": "2018-06-28T19:54:53.216Z",
                "email": "pivdzoaufb_1528139549@tfbnw.net",
                "search_distance_km": 100.194393152313
            }
        ],
        "declined": [
            {
                "id": 2,
                "user_id": 2,
                "event_id": 1,
                "approved": true,
                "declined": true,
                "created_at": "2018-05-13T16:11:26.777Z",
                "updated_at": "2018-05-30T21:32:15.660Z"
            }
        ]
    }],
    confirmedEvents: []
};

export const eventsReducer = (state = eventStates, action) => {

    const {
        availableEvents,
        confirmedEvents,
    } = state;

    switch (action.type) {

        case 'CONFIRM_EVENT':
            const confirmedEvent = availableEvents[action.payload];
            confirmedEvent.eventConfirmed = true;
            confirmedEvents.push(confirmedEvent);
            availableEvents.splice(action.payload, 1);
            return state;

        case 'SONGKICK_EVENT':
            const allEvents = action.payload;
            // allEvents.forEach((event) => {
            //     let oneEvent = {};
            //     oneEvent.eventHostName = event.displayName
            // })

            for (var i = 0; i < allEvents.length; i++) {
                var oneEvent = allEvents[i]
                console.log(oneEvent);
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
                break;
                // availableEvents.push(event);
            }
            return state;

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

            return state;
            
        default:
            return state
    }
};