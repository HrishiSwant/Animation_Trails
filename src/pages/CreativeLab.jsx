import { useState } from "react";
import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";

import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";
import Assets from "../core/assets/Assets";

import StorageInspector from "../components/workspace/Storage/StorageInspector";
import ExportCenter from "../components/workspace/Export/ExportCenter";

export default function CreativeLab() {

  const [currentTool, setCurrentTool] =
    useState("dashboard");

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

      case "assets":

        return <Assets />;

      case "storage":

        return <StorageInspector />;

      case "export":

        return <ExportCenter />;

      case "tasks":

        return (

          <div className="coming-soon">

            <h1>

              ✅ Tasks

            </h1>

            <p>

              Coming Soon

            </p>

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
            onClick={() =>
              setCurrentTool("dashboard")
            }
          >

            ← Workspace

          </button>

          <span className="tool-title">

            {

              currentTool === "storage"

                ? "Storage Inspector"

                : currentTool === "export"

                ? "Export Center"

                : currentTool === "assets"

                ? "Asset Manager"

                : currentTool.charAt(0).toUpperCase() +
                  currentTool.slice(1)

            }

          </span>

        </div>

      )}

      {renderTool()}

    </div>

  );

}
