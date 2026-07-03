import "./WorkspaceHealth.css";

export default function WorkspaceHealth({

  health,

}) {

  let status = "Needs Work";

  let color = "#EF4444";

  if (health.score >= 80) {

    status = "Excellent";

    color = "#22C55E";

  }

  else if (health.score >= 50) {

    status = "Good";

    color = "#F59E0B";

  }

  return (

    <section className="workspace-health">

      <div className="workspace-health-header">

        <h2>

          Workspace Health

        </h2>

        <span

          style={{

            color,

          }}

        >

          {status}

        </span>

      </div>

      <div className="workspace-health-score">

        {health.score}%

      </div>

      <div className="workspace-health-bar">

        <div

          className="workspace-health-fill"

          style={{

            width: `${health.score}%`,

            background: color,

          }}

        />

      </div>

      <div className="workspace-health-list">

        {

          health.checks.map(

            check => (

              <div

                key={check.label}

                className="workspace-health-item"

              >

                <span>

                  {

                    check.passed

                      ? "✅"

                      : "⚠️"

                  }

                </span>

                <span>

                  {check.label}

                </span>

              </div>

            ),

          )

        }

      </div>

    </section>

  );

}
