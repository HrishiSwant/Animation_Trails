import "./Settings.css";

import AppearanceSettings from "./AppearanceSettings";
import WorkspaceSettings from "./WorkspaceSettings";
import PresentationSettings from "./PresentationSettings";
import PresentationSettings from "./NotesSettings";
import PresentationSettings from "./SketchSetting";
import PresentationSettings from "./AssetsSetting";
import PresentationSettings from "./TasksSettings";
import PresentationSettings from "./StorageSettings";
import PresentationSettings from "./AccesibilitySettings";
import PresentationSettings from "./DeveloperSettings";
import PresentationSettings from "./About";

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

      return <AccesibilitySettings />;

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

      return <About />;

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
