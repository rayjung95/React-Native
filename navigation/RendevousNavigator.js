import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import EventDetailsScreen from '../screens/EventDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';
import GuestConfirmationScreen from '../screens/GuestConfirmationScreen';
import EventCreationScreen from '../screens/EventCreationScreen';


export default createStackNavigator({
    Login: LoginScreen,
    Landing: LandingScreen,
    UserCalender: UserCalendarScreen,
    EventDetails: EventDetailsScreen,
    ProfileSetting: UserSettingScreen,
    Guest: GuestConfirmationScreen,
    EventCreation: EventCreationScreen
})