import "./WorkspaceDashboard.css";

import WorkspaceCard from "./WorkspaceCard";

export default function WorkspaceDashboard({
  setCurrentTool,
}) {

  return (

    <div className="workspace-dashboard">

      <div className="dashboard-header">

        <h1>Workspace</h1>

        <p>

          Your personal creative operating system.

        </p>

      </div>

      <div className="dashboard-grid">

        <WorkspaceCard
          title="Notes"
          description="Store ideas, documentation and plans."
          icon="📝"
          color="#2563EB"
          onClick={() =>
            setCurrentTool("notes")
          }
        />

        <WorkspaceCard
          title="Sketch Board"
          description="Draw concepts and wireframes."
          icon="🎨"
          color="#10B981"
          onClick={() =>
            setCurrentTool("sketch")
          }
        />

        <WorkspaceCard
          title="Assets"
          description="Manage project resources."
          icon="📁"
          color="#F59E0B"
          onClick={() =>
            setCurrentTool("assets")
          }
        />

        <WorkspaceCard
          title="Tasks"
          description="Track your work."
          icon="✅"
          color="#EF4444"
          onClick={() =>
            setCurrentTool("tasks")
          }
        />

        <WorkspaceCard
          title="Storage"
          description="Inspect and manage workspace storage."
          icon="💾"
          color="#8B5CF6"
          onClick={() =>
            setCurrentTool("storage")
          }
        />

      </div>

    </div>

  );

}
