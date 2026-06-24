import "./WorkspaceCard.css";

export default function WorkspaceCard({
  title,
  description,
  icon,
  color,
  onClick,
}) {
  return (
    <div
      className="workspace-card"
      onClick={onClick}
      style={{
        borderTop: `4px solid ${color}`,
      }}
    >
      <div className="workspace-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}
