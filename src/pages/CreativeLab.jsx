import { useState } from "react";
import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";
import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";

export default function CreativeLab() {

  const [currentTool, setCurrentTool] = useState("dashboard");

  function renderTool() {

    switch (currentTool) {

      case "dashboard":
        return (
          <WorkspaceDashboard
            setCurrentTool={setCurrentTool}
          />
        );

      case "notes":
        return <Notes />;

      case "sketch":
        return <Sketch />;

      case "tasks":
        return (
          <div className="coming-soon">
            <h1>✅ Tasks</h1>
            <p>Coming Soon</p>
          </div>
        );

      case "assets":
        return (
          <div className="coming-soon">
            <h1>📁 Assets</h1>
            <p>Coming Soon</p>
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

      {currentTool !== "dashboard" && (

        <div className="toolbar">

          <button
            className="back-button"
            onClick={() => setCurrentTool("dashboard")}
          >
            ← Workspace
          </button>

          <span className="tool-title">

            {currentTool.charAt(0).toUpperCase() +
              currentTool.slice(1)}

          </span>

        </div>

      )}

      {renderTool()}

    </div>

  );

}
