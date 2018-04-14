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


export async function saveNewNote(text) {
  // if (text === '') return;
  // const newNote = {
  //   text: text,
  //   lastUpdate: new Date().getTime()
  // };
  // console.log(newNote);
  // const notes = await readJson(notes);
  //
  // console.log("read DOne")
  // if (notes == null) {
  //   console.log("NotesArrNotExist(")
  //   await insertJson(notes, [newNote]);
  //   console.log("saved note in new Array")
  //   console.log([newNote])
  // } else {
  //   console.log("NotesArray Exist)")
  //   notes.push(newNote);
  //   await insertJson(notes, notes);
  //   console.log("saved succes in old array")
  //   console.log(notes)
  // }
}