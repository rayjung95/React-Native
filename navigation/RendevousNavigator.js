import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import EventDetailsScreen from '../screens/EventDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import GuestConfirmationScreen from '../screens/GuestConfirmationScreen';
import EventCreationScreen from '../screens/EventCreationScreen';
import MapScreen from '../screens/MapScreen';
import GuestsListScreen from '../screens/GuestsListScreen';
import GuestsListEditScreen from '../screens/GuestsListEditScreen';
import GuestProfileScreen from '../screens/GuestProfileScreen';
import HostProfileScreen from '../screens/HostProfileScreen';
import GuestInfoConfirmationScreen from '../screens/GuestInfoConfirmationScreen';
import ChattingScreen from '../screens/ChattingScreen';
import DirectMessageScreen from '../screens/DirectMessageScreen'
import InviteFriends from '../screens/InviteFriends';
import MessagesScreen from '../screens/MessagesScreen';

export default createStackNavigator({
    Login: LoginScreen,
    Landing: LandingScreen,
    UserCalender: UserCalendarScreen,
    EventDetails: EventDetailsScreen,
    ProfileSetting: UserSettingScreen,
    EditProfile: EditProfileScreen,
    Guest: GuestConfirmationScreen,
    EventCreation: EventCreationScreen,
    Map: MapScreen,
    GuestsList: GuestsListScreen,
    GuestsListEdit: GuestsListEditScreen,
    GuestProfile: GuestProfileScreen,
    HostProfile: HostProfileScreen,
    GuestInfoConfirmation: GuestInfoConfirmationScreen,
    DirectMessage: DirectMessageScreen,
    Invite: InviteFriends,
    Messages: MessagesScreen,
    Chatting: ChattingScreen,
})