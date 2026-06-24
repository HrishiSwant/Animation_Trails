import "./Toolbar.css";

export default function Toolbar({
  tool,
  setTool,
  color,
  setColor,
  brushSize,
  setBrushSize,
  clearCanvas,
}) {
  return (
    <div className="toolbar-sketch">

      <button
        className={tool === "pencil" ? "active" : ""}
        onClick={() => setTool("pencil")}
      >
        ✏ Pencil
      </button>

      <button
        className={tool === "eraser" ? "active" : ""}
        onClick={() => setTool("eraser")}
      >
        🧽 Eraser
      </button>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        type="range"
        min="1"
        max="30"
        value={brushSize}
        onChange={(e) =>
          setBrushSize(Number(e.target.value))
        }
      />

      <button onClick={clearCanvas}>
        🗑 Clear
      </button>

    </div>
  );
}
