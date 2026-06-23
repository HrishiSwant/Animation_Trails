import "./AppSidebar.css";

export default function AppSidebar({
  currentPage,
  setCurrentPage,
}) {
  return (
    <aside className="app-sidebar">

      <div className="app-logo">

        <h1>🎨 Design OS</h1>

        <p>Your Creative Workspace</p>

      </div>

      <div className="nav-group">

        <span className="nav-title">
          Navigation
        </span>

        <button
          className={
            currentPage === "showcase"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setCurrentPage("showcase")}
        >
          🎞 Animation Showcase
        </button>

        <button
          className={
            currentPage === "creative"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setCurrentPage("creative")}
        >
          ✏ Creative Lab
        </button>

      </div>

      <div className="nav-group">

        <span className="nav-title">
          Coming Soon
        </span>

        <button className="nav-btn disabled">
          ⭐ Favorites
        </button>

        <button className="nav-btn disabled">
          📁 Assets
        </button>

        <button className="nav-btn disabled">
          🎨 Color Palette
        </button>

        <button className="nav-btn disabled">
          ⚙ Settings
        </button>

      </div>

      <div className="sidebar-footer">

        Version 2.0

      </div>

    </aside>
  );
}
