import "./WorkspaceShell.css";

import WorkspaceToolbar from "./WorkspaceToolbar";
import WorkspaceSidebar from "./WorkspaceSidebar";
import WorkspaceInspector from "./WorkspaceInspector";
import WorkspaceStatusBar from "./WorkspaceStatusBar";

export default function WorkspaceShell({

  children,

}) {

  return (

    <div className="workspace-shell">

      <WorkspaceToolbar />

      <div className="workspace-body">

        <WorkspaceSidebar />

        <main className="workspace-content">

          {children}

        </main>

        <WorkspaceInspector />

      </div>

      <WorkspaceStatusBar />

    </div>

  );

}
