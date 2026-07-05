import "./WorkspaceDashboard.css";

import useDashboard from "../../../hooks/dashboard/useDashboard";
import useDashboardPreferences from "../../../hooks/dashboard/useDashboardPreferences";

import DashboardOverview from "./DashboardOverview";
import DashboardQuickActions from "./DashboardQuickActions";
import DashboardStats from "./DashboardStats";

import WorkspaceCard from "./WorkspaceCard";

import ActiveWorkspaceSummary from "./ActiveWorkspaceSummary";
import WorkspaceHealth from "./WorkspaceHealth";

import WorkspaceInsights from "./WorkspaceInsights/WorkspaceInsights";
import FavoriteProjects from "./FavoriteProjects/FavoriteProjects";
import RecentProjects from "./RecentProjects/RecentProjects";
import ContinueWorking from "./ContinueWorking/ContinueWorking";
import TodaysActivity from "./TodaysActivity/TodaysActivity";
import ProductivityScore from "./ProductivityScore/ProductivityScore";
import WeeklyActivity from "./WeeklyActivity/WeeklyActivity";
import WorkspaceStreak from "./WorkspaceStreak/WorkspaceStreak";
import DashboardSummary from "./DashboardSummary/DashboardSummary";
import ProductivityRecommendations from "./ProductivityRecommendations/ProductivityRecommendations";
import DashboardPreferences from "./DashboardPreferences/DashboardPreferences";
import FavoriteWidgets from "./FavoriteWidgets/FavoriteWidgets";
import WidgetSection from "./WidgetSection/WidgetSection";
import DashboardTheme from "./DashboardTheme/DashboardTheme";
import DashboardWelcome from "./DashboardWelcome/DashboardWelcome";


export default function WorkspaceDashboard({

  setCurrentTool,

  startPresentation,

}) {

  const dashboard =

    useDashboard();

  const {

  preferences,

} = useDashboardPreferences();

  return (

    <div className={`workspace-dashboard dashboard-theme-${preferences.theme}`}>

      {/* ==========================
          PAGE HEADER
      ========================== */}

      <DashboardWelcome />

      {/* ==========================
          ACTIVE WORKSPACE
      ========================== */}

      <ActiveWorkspaceSummary

        project={dashboard.activeProject}

      />

      {/* ==========================
          FavoriteWidgets
      ========================== */}
      
      <FavoriteWidgets />

      {/* ==========================
          WORKSPACE OVERVIEW
      ========================== */}

      <DashboardOverview

        overview={dashboard.overview}

      />

      {/* ==========================
          WORKSPACE HEALTH
      ========================== */}

      <WidgetSection

        id="health"

        title="Workspace Health">

        <WorkspaceHealth

          health={dashboard.health}

          />

        </WidgetSection>

      {/* ==========================
          WORKSPACE INSIGHTS
      ========================== */}

      <WorkspaceInsights />

      {/* ==========================
          FAVORITE PROJECTS
      ========================== */}

      <FavoriteProjects />

      {/* ==========================
          RECENT PROJECTS
      ========================== */}

      <RecentProjects />

      {/* ==========================
          ContinueWorking
      ========================== */}

      <ContinueWorking />

      {/* ==========================
          TodaysActivity
      ========================== */}

      <TodaysActivity />

      {/* ==========================
          ProductivityScore
      ========================== */}
      
      <ProductivityScore />

      {/* ==========================
          WeeklyActivity
      ========================== */}
      
      <WeeklyActivity />

      {/* ==========================
          WorkspaceStreak 
      ========================== */}
      
      <WorkspaceStreak />

      {/* ==========================
          DashboardSummary 
      ========================== */}

      <DashboardSummary />

      {/* ==========================
          ProductivityRecommendations 
      ========================== */}

      <ProductivityRecommendations />

      {/* ==========================
          DashboardPreferences 
      ========================== */}

      <DashboardPreferences />
      
      {/* ==========================
          DashboardTheme
      ========================== */}

      <DashboardTheme />

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
