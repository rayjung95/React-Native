import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';


export default createStackNavigator({
    Login: LoginScreen,
    Landing: LandingScreen,
    UserCalender: UserCalendarScreen

})