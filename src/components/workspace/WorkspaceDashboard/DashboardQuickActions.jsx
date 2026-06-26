import "./DashboardQuickActions.css";

export default function DashboardQuickActions({

  actions,

  setCurrentTool,

}) {

  return (

    <div className="dashboard-quick-actions">

      <div className="dashboard-section-header">

        <h2>

          Quick Actions

        </h2>

        <p>

          Jump directly into your workspace.

        </p>

      </div>

      <div className="dashboard-actions-grid">

        {actions.map(action => (

          <button

            key={action.id}

            className="dashboard-action"

            onClick={() =>

              setCurrentTool(

                action.tool

              )

            }

          >

            <span className="dashboard-action-icon">

              {action.icon}

            </span>

            <span className="dashboard-action-title">

              {action.title}

            </span>

          </button>

        ))}

      </div>

    </div>

  );

}
