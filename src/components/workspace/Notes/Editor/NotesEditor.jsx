import "./NotesEditor.css";

export default function NotesEditor({

  note,

  updateTitle,

  updateContent,

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

      <div className="notes-editor-placeholder">

        D-6.1 Editor Foundation

      </div>

    </div>

  );

}
