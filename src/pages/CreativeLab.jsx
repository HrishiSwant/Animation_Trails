import { useState } from "react";

import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";

import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";
import Assets from "../components/workspace/Assets/Assets";
import Tasks from "../components/workspace/Tasks/Tasks";

import StorageInspector from "../components/workspace/Storage/StorageInspector";
import ExportCenter from "../components/workspace/Export/ExportCenter";

import Settings from "../components/workspace/Settings/Settings";

import PresentationMode from "../components/presentation/PresentationMode";

export default function CreativeLab() {

  const [

    currentTool,

    setCurrentTool,

  ] = useState("dashboard");

  const [

    presentation,

    setPresentation,

  ] = useState(false);

  function renderTool() {

    if (presentation) {

      return (

        <PresentationMode

          onExit={() =>

            setPresentation(false)

          }

        />

      );

    }

    switch (currentTool) {

      case "dashboard":

        return (

          <WorkspaceDashboard

            setCurrentTool={

              setCurrentTool

            }

            startPresentation={() =>

              setPresentation(true)

            }

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

      case "settings":

        return <Settings />;

      default:

        return (

          <WorkspaceDashboard

            setCurrentTool={

              setCurrentTool

            }

            startPresentation={() =>

              setPresentation(true)

            }

          />

        );

    }

  }

  function getToolTitle() {

    switch (currentTool) {

      case "notes":

        return "Notes";

      case "sketch":

        return "Sketch Board";

      case "assets":

        return "Asset Manager";

      case "tasks":

        return "Task Manager";

      case "storage":

        return "Storage Inspector";

      case "export":

        return "Export Center";

      case "settings":

        return "Settings";

      default:

        return "Workspace";

    }

  }

  return (

    <div className="creative-lab">

      {

        !presentation &&

        currentTool !== "dashboard" && (

          <div className="toolbar">

            <button

              className="back-button"

              onClick={() =>

                setCurrentTool(

                  "dashboard"

                )

              }

            >

              ← Workspace

            </button>

            <span className="tool-title">

              {getToolTitle()}

            </span>

          </div>

        )

      }

      {renderTool()}

    </div>

  );

}
