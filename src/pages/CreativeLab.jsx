import "./CreativeLab.css";

export default function CreativeLab() {
  return (
    <div className="creative-lab">

      <div className="creative-header">
        <div>
          <h1>✏ Creative Lab</h1>
          <p>
            Your personal workspace for ideas, sketches and notes.
          </p>
        </div>
      </div>

      <div className="creative-grid">

        <div className="tool-card">
          <div className="tool-icon">📝</div>

          <h2>Notes</h2>

          <p>
            Save project ideas, client requirements and quick thoughts.
          </p>

          <button disabled>
            Coming Soon
          </button>
        </div>

        <div className="tool-card">
          <div className="tool-icon">✏</div>

          <h2>Sketch Pad</h2>

          <p>
            Draw layouts and wireframes directly inside Design OS.
          </p>

          <button disabled>
            Coming Soon
          </button>
        </div>

        <div className="tool-card">
          <div className="tool-icon">🎨</div>

          <h2>Color Palette</h2>

          <p>
            Save your favorite brand colors and gradients.
          </p>

          <button disabled>
            Coming Soon
          </button>
        </div>

        <div className="tool-card">
          <div className="tool-icon">📁</div>

          <h2>Assets</h2>

          <p>
            Store logos, screenshots, SVGs and design resources.
          </p>

          <button disabled>
            Coming Soon
          </button>
        </div>

      </div>

    </div>
  );
}
