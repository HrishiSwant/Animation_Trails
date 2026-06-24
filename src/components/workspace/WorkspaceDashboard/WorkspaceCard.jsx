import "./WorkspaceCard.css";

export default function WorkspaceCard({
  title,
  description,
  icon,
  color,
  onClick,
  disabled = false,
}) {

  return (

    <div
      className={`workspace-card ${disabled ? "disabled" : ""}`}
      onClick={() => {

        if (!disabled) {

          onClick();

        }

      }}
      style={{
        borderTop: `4px solid ${color}`,
      }}
    >

      <div className="workspace-top">

        <div className="workspace-icon">

          {icon}

        </div>

        {disabled && (

          <span className="lock">

            🔒

          </span>

        )}

      </div>

      <h2>{title}</h2>

      <p>{description}</p>

    </div>

  );

}
