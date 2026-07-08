import "./NotesEditor.css";

import NotesToolbar from "./NotesToolbar";
import NotesStatusBar from "./NotesStatusBar";

export default function NotesEditor({

  note,

  updateTitle,

}) {

  return (

    <div className="editor">

      <input

        className="note-title-input"

        value={note.title}

        onChange={(e) =>

          updateTitle(e.target.value)

        }

        placeholder="Title"

      />

      <NotesToolbar />

      <div className="notes-editor-body">

        Editor Foundation

      </div>

      <NotesStatusBar />

    </div>

  );

}
