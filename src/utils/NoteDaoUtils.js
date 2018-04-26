import {NOTE_IDS_ARR} from "../Const";
import {insertJson, readJson, remove} from "./DbUtils";

export default class NoteDaoUtils {


  static async insertNote(text) {
    console.log("insert  Note");
    if (text === '') {
      console.log('note is empty will be not save');
      return;
    }

    const timestampId = new Date().getTime();
    const newNote = {
      id: timestampId,
      lastUpdate: timestampId,
      text: text
    };

    console.log(newNote);

    //save id to array
    let notes = await
      readJson(NOTE_IDS_ARR);
    if (notes == null) notes = [];
    notes.push(timestampId);
    insertJson(NOTE_IDS_ARR, notes);

    //save note
    insertJson(timestampId, newNote);
  }


  static async updateNote(newText, note) {
    console.log("update Note");

    //check changes
    if (note.text === newText) {
      console.log('note will not updated. Has no changes.')
      return;
    }

    //update Object
    note.text = newText;
    note.lastUpdate = new Date().getTime();

    //update in db
    insertJson(note.id, note)
  }


  static async deleteNote(note) {
    console.log('deleteNote');
    //remove note
    remove(note.id);

    //remove note id from noteIdsArray
    let notes = await
      readJson(NOTE_IDS_ARR);
    const index = notes.indexOf(note.id);
    if (index > -1)
      notes.splice(index, 1);
    await
      insertJson(NOTE_IDS_ARR, notes);

  }
}
