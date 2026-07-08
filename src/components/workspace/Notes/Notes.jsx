import { useEffect, useState } from "react";

import "./Notes.css";

import NotesSidebar from "./NotesSidebar";
import NotesEditor from "./Editor/NotesEditor";

import StorageManager from "../../../core/storage/StorageManager";
import StorageKeys from "../../../core/storage/StorageKeys";

export default function Notes() {

  /*
  ==========================
      NOTES STATE
  ==========================
  */

  const [notes, setNotes] = useState(() => {

    const saved = StorageManager.load(
      StorageKeys.NOTES,
    );

    return (
      saved || [
        {
          id: Date.now(),

          title: "Welcome",

          content: "",

          createdAt:
            new Date().toISOString(),

          updatedAt:
            new Date().toISOString(),

          favorite: false,

          pinned: false,

          tags: [],

          color: "default",

        },
      ]
    );

  });

  const [selectedId, setSelectedId] =
    useState(notes[0].id);

  const [search, setSearch] =
    useState("");

  /*
  ==========================
      STORAGE
  ==========================
  */

  useEffect(() => {

    StorageManager.save(

      StorageKeys.NOTES,

      notes,

    );

  }, [notes]);

  /*
  ==========================
      CURRENT NOTE
  ==========================
  */

  const selectedNote =

    notes.find(

      note =>

        note.id === selectedId,

    ) ||

    notes[0];

  /*
  ==========================
      NOTE ACTIONS
  ==========================
  */

  function createNote() {

    const now =

      new Date().toISOString();

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

    setNotes([

      newNote,

      ...notes,

    ]);

    setSelectedId(

      newNote.id,

    );

  }

  function deleteNote(id) {

    if (

      notes.length === 1

    )

      return;

    const updated =

      notes.filter(

        note =>

          note.id !== id,

      );

    setNotes(updated);

    setSelectedId(

      updated[0].id,

    );

  }

  function toggleFavorite(id) {

    setNotes(

      notes.map(

        note =>

          note.id === id

            ? {

                ...note,

                favorite:

                  !note.favorite,

              }

            : note,

      ),

    );

  }

  function togglePinned(id) {

    setNotes(

      notes.map(

        note =>

          note.id === id

            ? {

                ...note,

                pinned:

                  !note.pinned,

              }

            : note,

      ),

    );

  }

  function updateTitle(value) {

    setNotes(

      notes.map(

        note =>

          note.id === selectedId

            ? {

                ...note,

                title: value,

                updatedAt:

                  new Date().toISOString(),

              }

            : note,

      ),

    );

  }

  function updateContent(value) {

    setNotes(

      notes.map(

        note =>

          note.id === selectedId

            ? {

                ...note,

                content: value,

                updatedAt:

                  new Date().toISOString(),

              }

            : note,

      ),

    );

  }

  /*
  ==========================
      FUTURE MODULES
  ==========================

  D-6.2
      Text Formatting

  D-6.3
      Typography

  D-6.4
      Colors

  D-6.5
      Lists

  D-6.6
      Images

  D-6.7
      Tables

  D-6.8
      Export

  */

  return (

    <div className="notes">

      <NotesSidebar

        notes={notes}

        selectedId={selectedId}

        setSelectedId={

          setSelectedId

        }

        search={search}

        setSearch={

          setSearch

        }

        createNote={

          createNote

        }

        deleteNote={

          deleteNote

        }

        toggleFavorite={

          toggleFavorite

        }

        togglePinned={

          togglePinned

        }

      />

      <NotesEditor

        note={selectedNote}

        updateTitle={

          updateTitle

        }

        updateContent={

          updateContent

        }

      />

    </div>

  );

}
