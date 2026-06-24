import ExportManager from "../../../core/export/ExportManager";

export default function ExportCenter() {

  function exportWorkspace() {

    ExportManager.exportWorkspace();

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

      </div>

    </div>

  );

}
