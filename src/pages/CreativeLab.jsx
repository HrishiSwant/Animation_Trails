import { useState } from "react";
import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";

import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";
import Assets from "../components/workspace/Assets/Assets";
import Tasks from "../components/workspace/Tasks/Tasks";

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

      case "tasks":

        return <Tasks />;

      case "storage":

        return <StorageInspector />;

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

  function getToolTitle() {

    switch (currentTool) {

      case "storage":

        return "Storage Inspector";

      case "export":

        return "Export Center";

      case "assets":

        return "Asset Manager";

      case "tasks":

        return "Task Manager";

      case "notes":

        return "Notes";

      case "sketch":

        return "Sketch";

      default:

        return (

          currentTool.charAt(0).toUpperCase() +

          currentTool.slice(1)

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

            {getToolTitle()}

          </span>

        </div>

      )}

      {renderTool()}

    </div>

  );

}
