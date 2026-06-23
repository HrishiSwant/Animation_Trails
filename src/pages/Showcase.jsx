import { useState } from "react";
import "./Showcase.css";

import animations from "../data/animations";

export default function Showcase() {
  const [selected, setSelected] = useState(animations[0]);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SelectedComponent = selected.component;

  const filtered = animations.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const groupedAnimations = filtered.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div className="showcase">

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-header">

          <h1>🎨 Showcase</h1>

          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>

        </div>

        <input
          type="text"
          placeholder="Search animation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="animation-list">

          {Object.entries(groupedAnimations).map(([category, items]) => (

            <div key={category} className="category-group">

              <h3 className="category-title">
                {category}
              </h3>

              {items.map((item) => (

                <button
                  key={item.id}
                  className={
                    selected.id === item.id
                      ? "animation-btn active"
                      : "animation-btn"
                  }
                  onClick={() => {
                    setSelected(item);
                    setSidebarOpen(false);
                  }}
                >
                  {item.name}
                </button>

              ))}

            </div>

          ))}

        </div>

      </aside>

      {/* Preview */}

      <main className="preview">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        <div className="preview-header">
          <h2>{selected.name}</h2>
        </div>

        <div className="preview-window">
          <SelectedComponent />
        </div>

      </main>

    </div>
  );
}        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-header">

          <h1>🎨 Showcase</h1>

          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        <input
          type="text"
          placeholder="Search animation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="animation-list">

          {Object.entries(groupedAnimations).map(([category, items]) => (

            <div key={category} className="category-group">

              <h3 className="category-title">
                {category}
              </h3>

              {items.map((item) => (

                <button
                  key={item.id}
                  className={
                    selected.id === item.id
                      ? "animation-btn active"
                      : "animation-btn"
                  }
                  onClick={() => {
                    setSelected(item);
                    setSidebarOpen(false);
                  }}
                >
                  {item.name}
                </button>

              ))}

            </div>

          ))}

        </div>

      </aside>

      {/* Preview */}
      <main className="preview">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        <div className="preview-header">
          <h2>{selected.name}</h2>
        </div>

        <div className="preview-window">
          <SelectedComponent />
        </div>

      </main>

    </div>
  );
}
