import {sha256} from "./CryptoUtils";
import {authData, notes} from "../Const";
import {insertJson, readJson} from "./DbUtils";

export function verifyUserData(data) {
  if (!data ||
    !data.hasOwnProperty('login') ||
    !data.hasOwnProperty('password') ||
    !data.hasOwnProperty('privateKey') ||
    !data.hasOwnProperty('id'))
    return false;

  const privateKey = sha256(data.login + data.password);
  const id = sha256(privateKey);
  return data.privateKey === privateKey && data.id === id;
}

export async function saveUserData(login, password) {
  const privateKey = sha256(login + password);
  const id = sha256(privateKey);
  const dataToSave = {
    login: login,
    password: password,
    privateKey: privateKey,
    id: id
  };
  await insertJson(authData, dataToSave);
}

export function isLoginValid(login) {
  return login.length >= 3 && login.indexOf(' ') === -1;

}

export function isPassValid(password, password2) {
  return password.length >= 3 &&
    password.indexOf(' ') === -1 &&
    password === password2;
}