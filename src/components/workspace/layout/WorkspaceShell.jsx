import "./WorkspaceShell.css";

import { useCallback } from "react";

import useLayout from "../../../hooks/layout/useLayout";
import useDock from "../../../hooks/layout/useDock";

import WorkspaceToolbar from "./WorkspaceToolbar";
import WorkspaceInspector from "./WorkspaceInspector";
import WorkspaceStatusBar from "./WorkspaceStatusBar";
import ResizeHandle from "./ResizeHandle";

export default function WorkspaceShell({

  children,

}) {

  const {

    layout,

    update,

  } = useLayout();

  const {

    layout: dockLayout,

  } = useDock();

  /*
  ==========================
      INSPECTOR
  ==========================
  */

  const inspector =

    dockLayout.panels.inspector;

  /*
  ==========================
      INSPECTOR RESIZE
  ==========================
  */

  const startResize = useCallback((event) => {

    event.preventDefault();

    function handleMouseMove(e) {

      const width =

        window.innerWidth -

        e.clientX;

      update(

        "inspector",

        {

          width: Math.max(

            240,

            Math.min(

              width,

              520,

            ),

          ),

        },

      );

    }

    function handleMouseUp() {

      window.removeEventListener(

        "mousemove",

        handleMouseMove,

      );

      window.removeEventListener(

        "mouseup",

        handleMouseUp,

      );

    }

    window.addEventListener(

      "mousemove",

      handleMouseMove,

    );

    window.addEventListener(

      "mouseup",

      handleMouseUp,

    );

  }, [

    update,

  ]);

  /*
  ==========================
      RIGHT DOCK
  ==========================
  */

  function renderRightDock() {

    return (

      <>

        <ResizeHandle

          onMouseDown={

            startResize

          }

          hidden={

            !layout.inspector.visible

          }

        />

        <WorkspaceInspector

          width={

            layout.inspector.visible

              ? layout.inspector.width

              : 0

          }

          hidden={

            !layout.inspector.visible

          }

        />

      </>

    );

  }

  /*
  ==========================
      LEFT DOCK
  ==========================
  */

  function renderLeftDock() {

    return (

      <>

        <WorkspaceInspector

          width={

            layout.inspector.visible

              ? layout.inspector.width

              : 0

          }

          hidden={

            !layout.inspector.visible

          }

        />

        <ResizeHandle

          onMouseDown={

            startResize

          }

          hidden={

            !layout.inspector.visible

          }

        />

      </>

    );

  }

  return (

    <div className="workspace-shell">

      {

        layout.toolbar.visible && (

          <WorkspaceToolbar />

        )

      }

      <div className="workspace-body">

        {

          inspector.dock === "left" &&

          renderLeftDock()

        }

        <main className="workspace-content">

          {children}

        </main>

        {

          inspector.dock === "right" &&

          renderRightDock()

        }

      </div>

      {

        layout.statusbar.visible && (

          <WorkspaceStatusBar />

        )

      }

    </div>

  );

}
