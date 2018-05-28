import BackgroundFetch from "react-native-background-fetch";
import LogsUtils from "../utils/LogsUtils";

/**
 * call service function every 15 min.
 */
export default class BackgroundService {

  static async init() {
    BackgroundFetch.configure({
        minimumFetchInterval: 15,  // <-- minutes (15 is minimum allowed)
        stopOnTerminate: false,    // <-- Android-only,
        startOnBoot: true,         // <-- Android-only
        enableHeadless: true       // use for background job react native (Headless) functionality (android)
      },
      () => {
        this.service();
        BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
      },
      this.error
    );
  }


  static stop() {
    BackgroundFetch.stop();
  }

  /**
   * simulate on ios : adb shell cmd jobscheduler run -f com.internotes 999
   * simulate service on android :  adb shell cmd jobscheduler run -f com.internotes 999
   */
  static service() {
    LogsUtils.addLog('backgroundJob call');
  }


  static status() {
    BackgroundFetch.status((status) => {
      switch (status) {
        case BackgroundFetch.STATUS_RESTRICTED:
          console.log("BackgroundFetch restricted");
          return 'restricted';
        case BackgroundFetch.STATUS_DENIED:
          console.log("BackgroundFetch denied");
          return 'denied';
        case BackgroundFetch.STATUS_AVAILABLE:
          console.log("BackgroundFetch is enabled");
          return 'enabled';
      }
    });
  }

  static error(err) {
    LogsUtils.addLog('ERROR BackgroundFetch failed to start');
  }

}