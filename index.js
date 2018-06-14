import {AppRegistry} from 'react-native';
import App from './src/App';
import BackgroundFetch from "react-native-background-fetch";
import LogsUtils, {LOG_TYPE} from "./src/utils/LogsUtils";
import BackgroundService from "./src/services/BackgroundService";

const  MyHeadlessTask = async (event) => {
  await LogsUtils.add(LOG_TYPE.INFO,'call from Index.js');
  await LogsUtils.add(LOG_TYPE.INFO, event);//event ? wtf
  BackgroundService.service();
  BackgroundFetch.finish();
};

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);

AppRegistry.registerComponent('internotes', () => App);
