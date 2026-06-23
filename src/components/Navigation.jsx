import "./Navigation.css";

export default function Navigation({
  currentPage,
  setCurrentPage,
}) {
  return (
    <aside className="navigation">

      <div className="navigation-logo">
        <h1>🎨 Hrishi Studio</h1>
        <p>Create • Experiment • Present</p>
      </div>

      <div className="navigation-menu">

        <button
          className={
            currentPage === "library"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => setCurrentPage("library")}
        >
          📚 Library
        </button>

        <button
          className={
            currentPage === "workspace"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => setCurrentPage("workspace")}
        >
          ✏ Workspace
        </button>

        <button
          className={
            currentPage === "presentation"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => setCurrentPage("presentation")}
        >
          🎭 Presentation
        </button>

        <button
          className={
            currentPage === "settings"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => setCurrentPage("settings")}
        >
          ⚙ Settings
        </button>

      </div>

      <div className="navigation-footer">
        Hrishi Studio v1.0
      </div>

    </aside>
  );
}
