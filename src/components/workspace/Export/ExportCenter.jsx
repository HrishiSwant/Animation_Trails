import "./ExportCenter.css";

import ExportManager from "../../../core/export/ExportManager";

import StorageManager from "../../../core/storage/StorageManager";
import StorageKeys from "../../../core/storage/StorageKeys";

import SketchRegistry from "../../../core/sketch/SketchRegistry";
import SketchExportManager from "../../../core/export/SketchExportManager";

export default function ExportCenter() {

  function exportWorkspace() {

    ExportManager.exportWorkspace();

  }

  function exportNotesJSON() {

    const notes =
      StorageManager.load(
        StorageKeys.NOTES,
        []
      );

    ExportManager.exportJSON(
      "notes.json",
      notes
    );

  }

  function exportNotesTXT() {

    const notes =
      StorageManager.load(
        StorageKeys.NOTES,
        []
      );

    const text =
      notes
        .map(note =>

          `${note.title}

${note.content}

------------------`

        )
        .join("\n\n");

    ExportManager.exportText(
      "notes.txt",
      text
    );

  }

  function exportNotesMD() {

    const notes =
      StorageManager.load(
        StorageKeys.NOTES,
        []
      );

    const markdown =
      notes
        .map(note =>

          `# ${note.title}

${note.content}

---`

        )
        .join("\n\n");

    ExportManager.exportMarkdown(
      "notes.md",
      markdown
    );

  }

  function exportSketchPNG() {

    const engine =
      SketchRegistry.getEngine();

    if (!engine) {

      alert(
        "Open Sketch first and draw something."
      );

      return;

    }

    const renderer =
      engine.getRenderer();

    if (!renderer) {

      alert(
        "Sketch renderer not available."
      );

      return;

    }

    const png =
      renderer.exportPNG();

    SketchExportManager.downloadImage(
      png,
      "sketch.png"
    );

  }

  function exportSketchJPG() {

    const engine =
      SketchRegistry.getEngine();

    if (!engine) {

      alert(
        "Open Sketch first and draw something."
      );

      return;

    }

    const renderer =
      engine.getRenderer();

    if (!renderer) {

      alert(
        "Sketch renderer not available."
      );

      return;

    }

    const jpg =
      renderer.exportJPG();

    SketchExportManager.downloadImage(
      jpg,
      "sketch.jpg"
    );

  }

  return (

    <div className="export-center">

      <h1>

        Export Center

      </h1>

      <p>

        Export your workspace data.

      </p>

      <div className="export-grid">

        <button
          onClick={exportWorkspace}
        >
          💾 Export Workspace
        </button>

        <button
          onClick={exportNotesJSON}
        >
          📝 Notes JSON
        </button>

        <button
          onClick={exportNotesTXT}
        >
          📄 Notes TXT
        </button>

        <button
          onClick={exportNotesMD}
        >
          📘 Notes Markdown
        </button>

        <button
          onClick={exportSketchPNG}
        >
          🎨 Sketch PNG
        </button>

        <button
          onClick={exportSketchJPG}
        >
          🖼️ Sketch JPG
        </button>

      </div>

    </div>

  );

}
