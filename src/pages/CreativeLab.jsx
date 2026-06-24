import { useState } from "react";
import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";
import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";
import StorageInspector from "../components/workspace/Storage/StorageInspector";
import ExportCenter from "../components/workspace/Export/ExportCenter";

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

      case "storage":
        return <StorageInspector />;

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

        case "export":
        return <ExportCenter />;

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

            {currentTool === "storage"
              ? "Storage Inspector"
              : currentTool.charAt(0).toUpperCase() +
                currentTool.slice(1)}

          </span>

        </div>

      )}

      {renderTool()}

    </div>

  );

}
