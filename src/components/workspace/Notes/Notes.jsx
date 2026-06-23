import { useEffect, useState } from "react";
import "./Notes.css";

export default function Notes() {

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("hrishi-notes");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: Date.now(),
            title: "New Note",
            content: "",
          },
        ];
  });

  const [selectedId, setSelectedId] = useState(notes[0].id);

  useEffect(() => {
    localStorage.setItem(
      "hrishi-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const selectedNote = notes.find(
    (note) => note.id === selectedId
  );

  function createNote() {
    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: "",
    };

    setNotes([newNote, ...notes]);
    setSelectedId(newNote.id);
  }

  function deleteNote(id) {
    if (notes.length === 1) return;

    const updated = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updated);
    setSelectedId(updated[0].id);
  }

  function updateContent(value) {
    setNotes(
      notes.map((note) =>
        note.id === selectedId
          ? {
              ...note,
              content: value,
              title:
                value.split("\n")[0].slice(0, 25) ||
                "Untitled",
            }
          : note
      )
    );
  }

  return (
    <div className="notes">

      <div className="notes-sidebar">

        <button
          className="new-note-btn"
          onClick={createNote}
        >
          + New Note
        </button>

        <div className="notes-list">

          {notes.map((note) => (

            <div
              key={note.id}
              className={
                selectedId === note.id
                  ? "note-item active"
                  : "note-item"
              }
              onClick={() => setSelectedId(note.id)}
            >

              <span>{note.title}</span>

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                ×
              </button>

            </div>

          ))}

        </div>

      </div>

      <div className="editor">

        <textarea
          value={selectedNote.content}
          onChange={(e) =>
            updateContent(e.target.value)
          }
          placeholder="Start writing..."
        />

      </div>

    </div>
  );
}
