import CryptoUtils from "./CryptoUtils";
import {AUTH_DATA} from "../Const";
import DbUtils from "./DbUtils";

export default class UserDataUtils {
//tested
  static verifyUserData(data) {
    if (!data ||
      !data.hasOwnProperty('login') ||
      !data.hasOwnProperty('password') ||
      !data.hasOwnProperty('privateKey') ||
      !data.hasOwnProperty('id'))
      return false;

    const privateKey = CryptoUtils.sha256(data.login + data.password);
    const id = CryptoUtils.sha256(privateKey);
    return data.privateKey === privateKey && data.id === id;
  }

  static async saveUserData(login, password) {
    const privateKey = CryptoUtils.sha256(login + password);
    const id = CryptoUtils.sha256(privateKey);
    const dataToSave = {
      login: login,
      password: password,
      privateKey: privateKey,
      id: id
    };
    await DbUtils.insertJson(AUTH_DATA, dataToSave);
  }

  static isLoginValid(login) {
    return login.length >= 3 && login.indexOf(' ') === -1;
  }

  static isPassValid(password, password2) {
    return password.length >= 3 &&
      password.indexOf(' ') === -1 &&
      password === password2;
  }

}