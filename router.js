import {createSwitchNavigator} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/HomePage';
import WebView from './screens/MyWebView';

const loginStack = createStackNavigator({
  Login: {screen: Login},
});
const loggedInStack = createStackNavigator({
  WebView: {screen: WebView},
});

export const switchNavigator = createSwitchNavigator(
  {
    LoginStack: loginStack,
    WebViewStack: loggedInStack,
  },
  {
    initialRouteName: 'LoginStack',
  },
)