import "./WorkspaceShell.css";

import { useCallback } from "react";

import useLayout from "../../../hooks/layout/useLayout";

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

  return (

    <div className="workspace-shell">

      <WorkspaceToolbar />

      <div className="workspace-body">

        <main className="workspace-content">

          {children}

        </main>

        {

          layout.inspector.visible && (

            <>

<ResizeHandle
    onMouseDown={startResize}
    hidden={!layout.inspector.visible}
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

          )

        }

      </div>

      <WorkspaceStatusBar />

    </div>

  );

}
