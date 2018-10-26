import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import EventDetailsScreen from '../screens/EventDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';
import GuestConfirmationScreen from '../screens/GuestConfirmationScreen';


export default createStackNavigator({
    Login: LoginScreen,
    UserCalender: UserCalendarScreen,
    EventDetails: EventDetailsScreen,
    ProfileSetting: UserSettingScreen,
    Guest: GuestConfirmationScreen
    
})