import "./NotesToolbar.css";

export default function NotesToolbar() {

  return (

    <div className="notes-toolbar">

      <button disabled>

        Undo

      </button>

      <button disabled>

        Redo

      </button>

      <div className="notes-toolbar-divider" />

      <button disabled>

        B

      </button>

      <button disabled>

        I

      </button>

      <button disabled>

        U

      </button>

    </div>

  );

}
