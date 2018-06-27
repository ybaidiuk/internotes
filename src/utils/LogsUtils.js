import DbUtils from "./DbUtils";
import * as Const from "../Const";

export const LOG_TYPE = {
  INFO: 0,
  WARNING: 1,
  ERROR: 2,
};
export default class LogsUtils {

  //exemple : await LogsUtils.addLog(LOG_TYPE.INFO, 'some text');
  static async add(logType, text) {
    console.log('log:' + text);
    let logsArr = await this.get();
    const newLog = {
      logType: logType,
      date: new Date(),
      massage: text
    };


    logsArr.unshift(newLog);
    logsArr.splice(500);
    DbUtils.insertJson(Const.LOGS, logsArr);

  }

  static async get() {
    const logsArr = await DbUtils.readJson(Const.LOGS);
    return logsArr ? logsArr : [];
  }

  static async clear() {
    await DbUtils.remove(Const.LOGS);
  }

}