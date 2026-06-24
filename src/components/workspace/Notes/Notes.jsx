import { useEffect, useState } from "react";
import "./Notes.css";

import NotesSidebar from "./NotesSidebar";
import StorageManager from "../../../core/storage/StorageManager";
import StorageKeys from "../../../core/storage/StorageKeys";

export default function Notes() {

  const [notes, setNotes] = useState(() => {

    const saved = StorageManager.load(
      StorageKeys.NOTES
      );

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
            color: "default",
          },
        ];

  });

  const [selectedId, setSelectedId] = useState(notes[0].id);

  const [search, setSearch] = useState("");

  useEffect(() => {

    StorageManager.save(
      StorageKeys.NOTES,
      notes
      );

  }, [notes]);

  const selectedNote =
    notes.find((note) => note.id === selectedId) ||
    notes[0];

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

      color: "default",

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

  function toggleFavorite(id) {

    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              favorite: !note.favorite,
            }
          : note
      )
    );

  }

  function togglePinned(id) {

    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );

  }

  function updateTitle(value) {

    setNotes(
      notes.map((note) =>
        note.id === selectedId
          ? {
              ...note,
              title: value,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );

  }

  function updateContent(value) {

    setNotes(
      notes.map((note) =>
        note.id === selectedId
          ? {
              ...note,
              content: value,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );

  }

  const wordCount = selectedNote.content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const characterCount =
    selectedNote.content.length;

  return (

    <div className="notes">

      <NotesSidebar

        notes={notes}

        selectedId={selectedId}

        setSelectedId={setSelectedId}

        search={search}

        setSearch={setSearch}

        createNote={createNote}

        deleteNote={deleteNote}

        toggleFavorite={toggleFavorite}

        togglePinned={togglePinned}

      />

      <div className="editor">

        <input

          className="note-title-input"

          value={selectedNote.title}

          onChange={(e) =>
            updateTitle(e.target.value)
          }

          placeholder="Title"

        />

        <textarea

          value={selectedNote.content}

          onChange={(e) =>
            updateContent(e.target.value)
          }

          placeholder="Start writing..."

        />

        <div className="editor-footer">

          <span>

            📅 Updated{" "}

            {new Date(
              selectedNote.updatedAt
            ).toLocaleString()}

          </span>

          <span>

            📝 {wordCount} words

          </span>

          <span>

            🔤 {characterCount} characters

          </span>

        </div>

      </div>

    </div>

  );

}
