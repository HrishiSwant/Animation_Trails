import { useState } from "react";
import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/Notes/WorkspaceDashboard/WorkspaceDashboard";
import Notes from "../components/workspace/Notes/Notes";

export default function CreativeLab() {

  const [currentTool, setCurrentTool] = useState(null);

  function renderTool() {

    switch (currentTool) {

      case "notes":
        return <Notes />;

      case "sketch":
        return (
          <div className="coming-soon">
            <h2>🎨 Sketch Board</h2>
            <p>Coming Soon...</p>
          </div>
        );

      case "assets":
        return (
          <div className="coming-soon">
            <h2>📁 Assets</h2>
            <p>Coming Soon...</p>
          </div>
        );

      case "tasks":
        return (
          <div className="coming-soon">
            <h2>✅ Tasks</h2>
            <p>Coming Soon...</p>
          </div>
        );

      default:
        return (
          <WorkspaceDashboard
            setCurrentTool={setCurrentTool}
          />
        );

    }

  }

  return (

    <div className="creative-lab">

      {currentTool && (

        <button
          className="back-button"
          onClick={() => setCurrentTool(null)}
        >
          ← Back to Workspace
        </button>

      )}

      {renderTool()}

    </div>

  );

}
