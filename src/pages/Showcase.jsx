import { useState } from "react";
import "./Showcase.css";

import animations from "../data/animations";

// Demo Components
import ImageTrailDemo from "../demos/ImageTrailDemo";

const componentMap = {
  ImageTrail: <ImageTrailDemo />,
};

export default function Showcase() {
  const [selected, setSelected] = useState(animations[0]);
  const [search, setSearch] = useState("");

  const filtered = animations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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

              <small>{item.category}</small>

            </button>

          ))}

        </div>

      </aside>

      <main className="preview">

        <div className="preview-header">

          <h2>{selected.name}</h2>

          <span>{selected.category}</span>

        </div>

        <div className="preview-window">

          {componentMap[selected.component]}

        </div>

      </main>

    </div>
  );
}
