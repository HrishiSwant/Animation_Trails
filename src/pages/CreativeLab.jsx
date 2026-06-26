import { useState } from "react";

import "./CreativeLab.css";

import WorkspaceDashboard from "../components/workspace/WorkspaceDashboard/WorkspaceDashboard";

import Notes from "../components/workspace/Notes/Notes";
import Sketch from "../components/workspace/Sketch/Sketch";
import Assets from "../components/workspace/Assets/Assets";
import Tasks from "../components/workspace/Tasks/Tasks";

import StorageInspector from "../components/workspace/Storage/StorageInspector";
import ExportCenter from "../components/workspace/Export/ExportCenter";

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

              {

                currentTool === "storage"

                  ? "Storage Inspector"

                  : currentTool === "export"

                  ? "Export Center"

                  : currentTool === "assets"

                  ? "Asset Manager"

                  : currentTool === "tasks"

                  ? "Task Manager"

                  : currentTool === "sketch"

                  ? "Sketch Board"

                  : currentTool

                      .charAt(0)

                      .toUpperCase() +

                    currentTool.slice(1)

              }

            </span>

          </div>

        )

      }

      {renderTool()}

    </div>

  );

}
