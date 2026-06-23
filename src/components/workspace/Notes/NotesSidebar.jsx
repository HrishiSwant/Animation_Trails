import "./NotesSidebar.css";

import SearchBar from "./SearchBar";
import NoteCard from "./NoteCard";

export default function NotesSidebar({
  notes,
  selectedId,
  setSelectedId,
  search,
  setSearch,
  createNote,
  deleteNote,
  toggleFavorite,
  togglePinned,
}) {

  const filtered = notes
    .filter((note) =>

      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      note.content
        .toLowerCase()
        .includes(search.toLowerCase())

    )
    .sort((a, b) => {

      if (a.pinned && !b.pinned) return -1;

      if (!a.pinned && b.pinned) return 1;

      return (
        new Date(b.updatedAt) -
        new Date(a.updatedAt)
      );

    });

  return (

    <div className="notes-sidebar">

      <button
        className="new-note-btn"
        onClick={createNote}
      >
        + New Note
      </button>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="notes-list">

        {filtered.map((note) => (

          <NoteCard
            key={note.id}
            note={note}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            deleteNote={deleteNote}
            toggleFavorite={toggleFavorite}
            togglePinned={togglePinned}
          />

        ))}

      </div>

    </div>

  );

}
