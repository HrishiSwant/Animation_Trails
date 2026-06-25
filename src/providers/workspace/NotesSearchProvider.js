import StorageManager from "../../core/storage/StorageManager";
import StorageKeys from "../../core/storage/StorageKeys";

import SearchResultTypes from "../../core/workspace/SearchResultTypes";

export default class NotesSearchProvider {

  static getEntries() {

    const notes =

      StorageManager.load(

        StorageKeys.NOTES,

        []

      );

    return notes.map(note => ({

      id: note.id,

      type: SearchResultTypes.NOTE,

      title:

        note.title ||

        "Untitled Note",

      content:

        note.content ||

        "",

      original: note,

    }));

  }

}
