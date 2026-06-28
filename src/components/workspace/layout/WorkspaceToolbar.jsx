import "./WorkspaceToolbar.css";

import useLayout from "../../../hooks/layout/useLayout";

export default function WorkspaceToolbar() {

  const {

    layout,

    toggleInspector,

  } = useLayout();

  return (

    <header className="workspace-toolbar">

      <h3>

        Workspace

      </h3>

      <button

        className="toolbar-btn"

        onClick={toggleInspector}

        title={

          layout.inspector.visible

            ? "Hide Inspector"

            : "Show Inspector"

        }

      >

        {

          layout.inspector.visible

            ? "👁️"

            : "🚫"

        }

      </button>

    </header>

  );

}
