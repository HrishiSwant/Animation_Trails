import "./Settings.css";

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

      return (

        <div className="settings-section">

          <h2>

            🎨 Appearance

          </h2>

          <p>

            Customize the look and feel of Hrishi Studio.

          </p>

        </div>

      );

    /*
    ==========================
        WORKSPACE
    ==========================
    */

    case "workspace":

      return (

        <div className="settings-section">

          <h2>

            🖥️ Workspace

          </h2>

          <p>

            Configure your workspace preferences.

          </p>

        </div>

      );

    /*
    ==========================
        PRESENTATION
    ==========================
    */

    case "presentation":

      return (

        <div className="settings-section">

          <h2>

            🎬 Presentation

          </h2>

          <p>

            Configure presentation behavior.

          </p>

        </div>

      );

    /*
    ==========================
        NOTES
    ==========================
    */

    case "notes":

      return (

        <div className="settings-section">

          <h2>

            📝 Notes

          </h2>

          <p>

            Configure the Notes module.

          </p>

        </div>

      );

    /*
    ==========================
        SKETCH
    ==========================
    */

    case "sketch":

      return (

        <div className="settings-section">

          <h2>

            ✏️ Sketch

          </h2>

          <p>

            Configure the Sketch Board.

          </p>

        </div>

      );

    /*
    ==========================
        ASSETS
    ==========================
    */

    case "assets":

      return (

        <div className="settings-section">

          <h2>

            📁 Assets

          </h2>

          <p>

            Configure Asset Manager settings.

          </p>

        </div>

      );

    /*
    ==========================
        TASKS
    ==========================
    */

    case "tasks":

      return (

        <div className="settings-section">

          <h2>

            ✅ Tasks

          </h2>

          <p>

            Configure Task Manager settings.

          </p>

        </div>

      );

    /*
    ==========================
        STORAGE
    ==========================
    */

    case "storage":

      return (

        <div className="settings-section">

          <h2>

            💾 Storage

          </h2>

          <p>

            Manage storage usage and backups.

          </p>

        </div>

      );

    /*
    ==========================
        ACCESSIBILITY
    ==========================
    */

    case "accessibility":

      return (

        <div className="settings-section">

          <h2>

            ♿ Accessibility

          </h2>

          <p>

            Improve accessibility and usability.

          </p>

        </div>

      );

    /*
    ==========================
        DEVELOPER
    ==========================
    */

    case "developer":

      return (

        <div className="settings-section">

          <h2>

            ⚙️ Developer

          </h2>

          <p>

            Developer tools and debugging options.

          </p>

        </div>

      );

    /*
    ==========================
        ABOUT
    ==========================
    */

    case "about":

      return (

        <div className="settings-section">

          <h2>

            ℹ️ About

          </h2>

          <p>

            Information about Hrishi Studio.

          </p>

        </div>

      );

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
