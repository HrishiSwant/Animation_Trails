import "./Notes.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
