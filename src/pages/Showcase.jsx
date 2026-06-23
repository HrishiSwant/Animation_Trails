import { useState } from "react";
import "./Showcase.css";

import animations from "../data/animations";

export default function Showcase() {
  const [selected, setSelected] = useState(animations[0]);
  const [search, setSearch] = useState("");

  // This gets the currently selected React component
  const SelectedComponent = selected.component;

  // Search by name, category and tags
  const filtered = animations.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="showcase">
      <aside className="sidebar">
        <h1>🎨 Showcase</h1>

        <input
          type="text"
          placeholder="Search animation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="animation-list">
          {filtered.map((item) => (
            <button
              key={item.id}
              className={
                selected.id === item.id
                  ? "animation-btn active"
                  : "animation-btn"
              }
              onClick={() => setSelected(item)}
            >
              <span>{item.name}</span>

              <div className="meta">
                <small>{item.category}</small>
                <small>{item.difficulty}</small>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <main className="preview">
        <div className="preview-header">
          <h2>{selected.name}</h2>

          <span>{selected.category}</span>
        </div>

        <div className="component-info">
          <span>📦 {selected.dependencies.join(", ")}</span>
          <span>⚡ {selected.source}</span>
        </div>

        <div className="preview-window">
          <SelectedComponent />
        </div>
      </main>
    </div>
  );
}
