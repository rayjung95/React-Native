import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import EventDetailsScreen from '../screens/EventDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import GuestConfirmationScreen from '../screens/GuestConfirmationScreen';
import MapScreen from '../screens/MapScreen';
import GuestsListScreen from '../screens/GuestsListScreen';
import GuestsListEditScreen from '../screens/GuestsListEditScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GuestInfoConfirmationScreen from '../screens/GuestInfoConfirmationScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import DirectMessageScreen from '../screens/DirectMessageScreen'
import InviteFriends from '../screens/InviteFriends';
import MessagesScreen from '../screens/MessagesScreen';

export default createStackNavigator({
    // Loading: props => <LoadingScreen
    //     borderColor={'#feea7e'}
    //     backgroundColor={'#feea7e'}
    //     size={50}
    //     {...this.props}
    //     pulseMaxSize={400}
    //     avatar={require('../assets/Icons/main_feed.imageset/main_feed.png')}/>,
    // Login: LoginScreen,
    Landing: LandingScreen,
    UserCalender: UserCalendarScreen,
    EventDetails: EventDetailsScreen,
    ProfileSetting: UserSettingScreen,
    EditProfile: EditProfileScreen,
    Guest: GuestConfirmationScreen,
    Map: MapScreen,
    GuestsList: GuestsListScreen,
    GuestsListEdit: GuestsListEditScreen,
    Profile: ProfileScreen,
    GuestInfoConfirmation: GuestInfoConfirmationScreen,
    DirectMessage: DirectMessageScreen,
    Invite: InviteFriends,
    Messages: MessagesScreen,
    ChatRoom: ChatRoomScreen,
})