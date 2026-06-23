import { useState } from "react";
import "./Showcase.css";

import animations from "../data/animations";

export default function Showcase() {
  const [selected, setSelected] = useState(animations[0]);
  const [search, setSearch] = useState("");

  const SelectedComponent = selected.component;

  const filtered = animations.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const groupedAnimations = filtered.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);

    return groups;
  }, {});

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
          {Object.entries(groupedAnimations).map(([category, items]) => (
            <div key={category} className="category-group">
              <h3 className="category-title">{category}</h3>

              {items.map((item) => (
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
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>

      <main className="preview">
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
