import "./NoteCard.css";

export default function NoteCard({
  note,
  selectedId,
  setSelectedId,
  toggleFavorite,
  togglePinned,
  deleteNote,
}) {
  return (
    <div
      className={
        selectedId === note.id
          ? "note-card active"
          : "note-card"
      }
      onClick={() => setSelectedId(note.id)}
    >
      <div className="note-header">

        <h4>{note.title}</h4>

        <div className="note-buttons">

          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePinned(note.id);
            }}
          >
            {note.pinned ? "📌" : "📍"}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(note.id);
            }}
          >
            {note.favorite ? "⭐" : "☆"}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            🗑
          </button>

        </div>

      </div>

      <p className="note-preview">
        {note.content.slice(0, 70) || "Empty note..."}
      </p>

      <small>
        Updated{" "}
        {new Date(note.updatedAt).toLocaleString()}
      </small>
    </div>
  );
}
