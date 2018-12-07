/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import CalendarsScreen from './src/calender';
import CalendarListScreen from './src/calendarList';
import AngendaScreen from './src/Agenda';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CalendarsScreen);
