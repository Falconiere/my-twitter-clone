/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {Routes as App} from './src/routes';
import {name as appName} from './app.json';

import {LogBox} from 'react-native';

// annoying warning from tamagui
LogBox.ignoreLogs(['`borderBottomStyle`', '$borderColor', 'Failed prop type']);

AppRegistry.registerComponent(appName, () => App);
