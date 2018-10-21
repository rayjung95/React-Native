import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import EventDetailsScreen from '../screens/EventDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';


export default createStackNavigator({
    UserCalender: UserCalendarScreen,
    EventDetails: EventDetailsScreen,
    Login: LoginScreen,
    Landing: LandingScreen,
    ProfileSetting: UserSettingScreen
})