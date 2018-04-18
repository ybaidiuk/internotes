import {NOTE_ID_ARR, NOTE_TITLE_LENGTH} from "../Const";
import {insertJson, readJson} from "./DbUtils";



export async function insertNote(text) {
  console.log("Create");
  if (text === '') {
    console.log('note is empty will be not save');
    return;
  }

  const timestampId = new Date().getTime();
  const newNote = {
    id: timestampId,
    lastUpdate: timestampId,
    title: text.substring(0, NOTE_TITLE_LENGTH),// todo first line 30-70 letters  till '\n
    text: text
  };

  console.log(newNote);

  //save id to array
  let notes = await readJson(NOTE_ID_ARR);
  if (notes == null) notes = [];
  notes.push(timestampId);



  insertJson(NOTE_ID_ARR, notes);

  //save note
  insertJson(timestampId.toString(), newNote);
}