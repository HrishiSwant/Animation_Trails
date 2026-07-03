import "./WorkspaceDashboard.css";

import useDashboard from "../../../hooks/dashboard/useDashboard";

import DashboardOverview from "./DashboardOverview";
import DashboardQuickActions from "./DashboardQuickActions";
import DashboardStats from "./DashboardStats";
import WorkspaceCard from "./WorkspaceCard";
import ActiveWorkspaceSummary from "./ActiveWorkspaceSummary";
import WorkspaceHealth from "./WorkspaceHealth";

export default function WorkspaceDashboard({

  setCurrentTool,

  startPresentation,

}) {

  const dashboard =

    useDashboard();

  return (

    <div className="workspace-dashboard">

      {/* ==========================
          PAGE HEADER
      ========================== */}

      <div className="dashboard-header">

        <h1>

          Workspace

        </h1>

        <p>

          Your personal creative operating system.

        </p>

      </div>

      {/* ==========================
          WORKSPACE OVERVIEW
      ========================== */}

      <DashboardOverview

        overview={dashboard.overview}

      />

      <WorkspaceHealth

  health={dashboard.health}

/>

      <ActiveWorkspaceSummary

  project={dashboard.activeProject}

/>

      {/* ==========================
          PROJECT WIDGETS
      ========================== */}

    

      {/* ==========================
          QUICK ACTIONS
      ========================== */}

      <DashboardQuickActions

        actions={dashboard.quickActions}

        setCurrentTool={setCurrentTool}

      />

      {/* ==========================
          WORKSPACE STATS
      ========================== */}

      <DashboardStats

        stats={dashboard.stats}

        summary={dashboard.summary}

      />

      {/* ==========================
          PRESENTATION
      ========================== */}

      <div className="dashboard-presentation">

        <button

          className="presentation-button"

          onClick={startPresentation}

        >

          🎬 Start Presentation Mode

        </button>

      </div>

      {/* ==========================
          MODULES
      ========================== */}

      <div className="dashboard-section">

        <h2>

          Workspace Modules

        </h2>

        <p>

          Open any workspace module below.

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

        <WorkspaceCard

          title="Export"

          description="Export workspace data."

          icon="📤"

          color="#06B6D4"

          onClick={() =>

            setCurrentTool("export")

          }

        />

        <WorkspaceCard

          title="Settings"

          description="Customize Hrishi Studio."

          icon="⚙️"

          color="#64748B"

          onClick={() =>

            setCurrentTool("settings")

          }

        />

      </div>

    </div>

  );

}
