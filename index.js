import {AppRegistry} from 'react-native';
import App from './src/App';
import BackgroundFetch from "react-native-background-fetch";
import LogsUtils, {LOG_TYPE} from "./src/utils/LogsUtils";

let MyHeadlessTask = async (event) => {
  console.log("event ? wtf");
  console.log(event);
  await LogsUtils.add(LOG_TYPE.INFO,'[BackgroundFetch HeadlessTask]');

  // Perform an example HTTP request.
  // Important:  await asychronous tasks when using HeadlessJS.
  let response = await fetch('https://facebook.github.io/react-native/movies.json');
  let responseJson = await response.json();
  console.log('[BackgroundFetch HeadlessTask response: ', responseJson);

  // Required:  Signal to native code that your task is complete.
  // If you don't do this, your app could be terminated and/or assigned
  // battery-blame for consuming too much time in background.
  BackgroundFetch.finish();
};

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);

AppRegistry.registerComponent('internotes', () => App);
