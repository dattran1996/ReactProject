/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {WelcomeScreen, Login} from './Screens';


AppRegistry.registerComponent(appName, () => () => < Login />);
