import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import UserSettingScreen from '../screens/UserSettingScreen';


export default createStackNavigator({
    Login: LoginScreen,
    Landing: LandingScreen,
    UserCalender: UserCalendarScreen,
    ProfileSetting: UserSettingScreen
})