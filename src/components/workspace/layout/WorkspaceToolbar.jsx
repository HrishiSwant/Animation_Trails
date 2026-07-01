import "./WorkspaceToolbar.css";

import useLayout from "../../../hooks/layout/useLayout";
import useDock from "../../../hooks/layout/useDock";
import ProjectSwitcher from "../../project/ProjectSwitcher/ProjectSwitcher";

export default function WorkspaceToolbar() {

  const {

    layout,

    toggleInspector,

    setPreset,

  } = useLayout();

  const {

    setDockPosition,

  } = useDock();

  return (

   <header className="workspace-toolbar">

  <div className="toolbar-left">

    <h3>

      Workspace

    </h3>

    <ProjectSwitcher />

  </div>

  <div className="toolbar-right">

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

    <button

      onClick={() =>

        setDockPosition(

          "inspector",

          "left",

        )

      }

    >

      Left

    </button>

    <button

      onClick={() =>

        setDockPosition(

          "inspector",

          "right",

        )

      }

    >

      Right

    </button>

    <button

      onClick={() =>

        setDockPosition(

          "inspector",

          "bottom",

        )

      }

    >

      Bottom

    </button>

  </div>

</header>

  );

}
