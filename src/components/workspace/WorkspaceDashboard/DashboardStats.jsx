import "./DashboardStats.css";

export default function DashboardStats({

  stats,

  summary,

}) {

  const progress =

    stats.tasks.total === 0

      ? 0

      : Math.round(

          (stats.tasks.completed /

            stats.tasks.total) *

            100

        );

  return (

    <div className="dashboard-stats">

      <div className="dashboard-stats-header">

        <h2>

          Workspace Statistics

        </h2>

        <p>

          Live overview of your workspace.

        </p>

      </div>

      <div className="dashboard-stats-grid">

        <div className="dashboard-stat">

          <h3>

            Storage Used

          </h3>

          <span>

            {summary.storage.kb} KB

          </span>

        </div>

        <div className="dashboard-stat">

          <h3>

            Workspace Ready

          </h3>

          <span>

            {

              summary.workspaceReady

                ? "Yes"

                : "No"

            }

          </span>

        </div>

        <div className="dashboard-stat">

          <h3>

            Modules

          </h3>

          <span>

            {summary.totalModules}

          </span>

        </div>

      </div>

      <div className="dashboard-progress">

        <div className="dashboard-progress-header">

          <span>

            Task Completion

          </span>

          <span>

            {progress}%

          </span>

        </div>

        <div className="dashboard-progress-bar">

          <div

            className="dashboard-progress-fill"

            style={{

              width:

                `${progress}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}
