import "./WorkspaceToolbar.css";

import useLayout from "../../../hooks/layout/useLayout";

export default function WorkspaceToolbar() {

  const {

    layout,

    toggleInspector,

    setPreset,

  } = useLayout();

  return (

    <header className="workspace-toolbar">

      <h3>

        Workspace

      </h3>

      <select

        className="layout-select"

        value={

          layout.preset ||

          "default"

        }

        onChange={event =>

          setPreset(

            event.target.value,

          )

        }

        title="Workspace Layout"

      >

        <option value="default">

          Default

        </option>

        <option value="focus">

          Focus

        </option>

        <option value="presentation">

          Presentation

        </option>

        <option value="developer">

          Developer

        </option>

      </select>

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
