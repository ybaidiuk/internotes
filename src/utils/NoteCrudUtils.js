import {notesIdsArr, noteTitleLenght} from "../Const";
import {insertJson, readJson} from "./DbUtils";



export async function insertNote(text) {
  console.log("Create");
  if (text === '') {
    console.log('note is empty will be not save');
    return;
  }

  const timestampId = new Date().getTime();
  const newNote = {
    // id: timestamp,
    lastUpdate: timestampId,
    title: text.substring(0, noteTitleLenght),
    text: text
  };

  console.log(newNote);

  //save id to array
  let notes = await readJson(notesIdsArr);
  if (notes == null) notes = [];
  notes.push(timestampId);


  console.log('notesList: ');
  console.log(notes);


  insertJson(notesIdsArr, notes);

  //save note
  insertJson(timestampId.toString(), newNote);
}