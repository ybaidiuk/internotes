import DbUtils from "./DbUtils";
import * as Const from "../Const";

export default class LogsUtils {

  static async addLog(text) {
    let logsArr = await this.getLogs();
    logsArr.unshift(new Date() +  text);
    logsArr.splice(1000);
    DbUtils.insertJson(Const.LOGS, logsArr);
  }

  static async getLogs() {
    const logsArr = await DbUtils.readJson(Const.LOGS);
    return logsArr ? logsArr : [];
  }
}