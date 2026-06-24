import "./WorkspaceDashboard.css";
import WorkspaceCard from "./WorkspaceCard";

export default function WorkspaceDashboard({
  setCurrentTool,
}) {
  return (
    <div className="workspace-dashboard">

      <div className="dashboard-header">

        <h1>Workspace</h1>

        <p>Your personal creative operating system.</p>

      </div>

      <div className="dashboard-grid">

        <WorkspaceCard
          title="Notes"
          description="Write and organize ideas."
          icon="📝"
          color="#2563EB"
          onClick={() => setCurrentTool("notes")}
        />

        <WorkspaceCard
          title="Sketch Board"
          description="Draw concepts and UI."
          icon="🎨"
          color="#10B981"
          onClick={() => setCurrentTool("sketch")}
        />

        <WorkspaceCard
          title="Tasks"
          description="Manage your workflow."
          icon="✅"
          color="#EF4444"
          onClick={() => setCurrentTool("tasks")}
        />

        <WorkspaceCard
          title="Assets"
          description="Project resources."
          icon="📁"
          color="#F59E0B"
          onClick={() => setCurrentTool("assets")}
        />

      </div>

    </div>
  );
}
