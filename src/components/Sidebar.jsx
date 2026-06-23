import "./Sidebar.css";

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="app-sidebar">

      <div className="logo">
        <h1>🎨 Design OS</h1>
      </div>

      <div className="nav-section">

        <button
          className={page === "showcase" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("showcase")}
        >
          🎞 Animation Showcase
        </button>

        <button
          className={page === "lab" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("lab")}
        >
          ✏ Creative Lab
        </button>

      </div>

    </aside>
  );
}
