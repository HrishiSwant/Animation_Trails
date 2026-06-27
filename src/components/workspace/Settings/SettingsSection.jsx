import "./Settings.css";

import AppearanceSettings from "./AppearanceSettings";
import WorkspaceSettings from "./WorkspaceSettings";
import PresentationSettings from "./PresentationSettings";
import NotesSettings from "./NotesSettings";
import SketchSettings from "./SketchSettings";
import AssetsSettings from "./AssetsSettings";
import TasksSettings from "./TasksSettings";
import StorageSettings from "./StorageSettings";
import AccessibilitySettings from "./AccessibilitySettings";
import DeveloperSettings from "./DeveloperSettings";
import AboutSettings from "./AboutSettings";

export default function SettingsSection({

  activeSection,

}) {

  switch (activeSection) {

    /*
    ==========================
        APPEARANCE
    ==========================
    */

    case "appearance":

      return <AppearanceSettings />;

    /*
    ==========================
        WORKSPACE
    ==========================
    */

    case "workspace":

      return <WorkspaceSettings />;

    /*
    ==========================
        PRESENTATION
    ==========================
    */

    case "presentation":

      return <PresentationSettings />;

    /*
    ==========================
        NOTES
    ==========================
    */

    case "notes":

      return <NotesSettings />;

    /*
    ==========================
        SKETCH
    ==========================
    */

    case "sketch":

      return <SketchSettings />;

    /*
    ==========================
        ASSETS
    ==========================
    */

    case "assets":

      return <AssetsSettings />;

    /*
    ==========================
        TASKS
    ==========================
    */

    case "tasks":

      return <TasksSettings />;

    /*
    ==========================
        STORAGE
    ==========================
    */

    case "storage":

      return <StorageSettings />;

    /*
    ==========================
        ACCESSIBILITY
    ==========================
    */

    case "accessibility":

      return <AccessibilitySettings />;

    /*
    ==========================
        DEVELOPER
    ==========================
    */

    case "developer":

      return <DeveloperSettings />;

    /*
    ==========================
        ABOUT
    ==========================
    */

    case "about":

      return <AboutSettings />;

    /*
    ==========================
        DEFAULT
    ==========================
    */

    default:

      return (

        <div className="settings-section">

          <h2>

            ⚙️ Settings

          </h2>

          <p>

            Select a category from the sidebar.

          </p>

        </div>

      );

  }

}
