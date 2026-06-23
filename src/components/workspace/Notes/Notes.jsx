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
            title: "Welcome",
            content: "",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            favorite: false,
            pinned: false,
            tags: [],
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

  const selectedNote =
    notes.find((note) => note.id === selectedId) || notes[0];

  function createNote() {

    const now = new Date().toISOString();

    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: "",
      createdAt: now,
      updatedAt: now,
      favorite: false,
      pinned: false,
      tags: [],
    };

    setNotes([newNote, ...notes]);

    setSelectedId(newNote.id);

  }

  function deleteNote(id) {

    if (notes.length === 1) return;

    const updated = notes.filter(note => note.id !== id);

    setNotes(updated);

    setSelectedId(updated[0].id);

  }

  function updateContent(value){

    setNotes(
      notes.map(note =>

        note.id === selectedId

          ? {
              ...note,
              content:value,
              title:value.split("\n")[0].slice(0,30) || "Untitled",
              updatedAt:new Date().toISOString()
            }

          : note

      )
    );

  }

  function toggleFavorite(id){

    setNotes(
      notes.map(note=>

        note.id===id

          ?{
              ...note,
              favorite:!note.favorite
            }

          :note

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

          {notes.map(note=>(

            <div
              key={note.id}
              className={
                selectedId===note.id
                  ? "note-item active"
                  : "note-item"
              }
              onClick={()=>setSelectedId(note.id)}
            >

              <div>

                <span>{note.title}</span>

                <small>

                  {new Date(note.updatedAt).toLocaleDateString()}

                </small>

              </div>

              <div className="actions">

                <button
                  className="star-btn"
                  onClick={(e)=>{
                    e.stopPropagation();
                    toggleFavorite(note.id);
                  }}
                >
                  {note.favorite ? "⭐" : "☆"}
                </button>

                <button
                  className="delete-btn"
                  onClick={(e)=>{
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                >
                  ×
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="editor">

        <textarea
          value={selectedNote.content}
          onChange={(e)=>updateContent(e.target.value)}
          placeholder="Start writing..."
        />

      </div>

    </div>

  );

}
