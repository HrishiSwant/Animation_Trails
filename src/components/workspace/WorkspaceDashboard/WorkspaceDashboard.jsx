import "./WorkspaceDashboard.css";
import WorkspaceCard from "./WorkspaceCard";

export default function WorkspaceDashboard({
  setCurrentTool,
}) {

  const cards = [
    {
      title: "Notes",
      description: "Write and organize ideas.",
      icon: "📝",
      color: "#2563EB",
      tool: "notes",
      enabled: true,
    },
    {
      title: "Sketch Board",
      description: "Draw concepts and UI.",
      icon: "🎨",
      color: "#10B981",
      tool: "sketch",
      enabled: false,
    },
    {
      title: "Tasks",
      description: "Manage your workflow.",
      icon: "✅",
      color: "#EF4444",
      tool: "tasks",
      enabled: false,
    },
    {
      title: "Assets",
      description: "Store project resources.",
      icon: "📁",
      color: "#F59E0B",
      tool: "assets",
      enabled: false,
    },
  ];

  return (
    <div className="workspace-dashboard">

      <div className="dashboard-header">

        <h1>Welcome Back 👋</h1>

        <p>
          Hrishi Studio is your creative operating system.
        </p>

      </div>

      <div className="dashboard-grid">

        {cards.map((card) => (

          <WorkspaceCard
            key={card.tool}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            onClick={() => {

              if(card.enabled){

                setCurrentTool(card.tool);

              }

            }}
            disabled={!card.enabled}
          />

        ))}

      </div>

      <div className="workspace-info">

        <div className="info-card">

          <h3>Recent Activity</h3>

          <ul>

            <li>📝 Notes module ready</li>

            <li>🚀 Workspace upgraded</li>

            <li>📂 Dashboard initialized</li>

          </ul>

        </div>

        <div className="info-card">

          <h3>Quick Stats</h3>

          <div className="stats">

            <div>

              <span>Notes</span>

              <strong>1</strong>

            </div>

            <div>

              <span>Tools</span>

              <strong>4</strong>

            </div>

            <div>

              <span>Status</span>

              <strong>Active</strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
