import "./ProjectDashboard.css";

function formatDate(value) {

  if (!value) {

    return "Unknown";

  }

  return new Date(value)

    .toLocaleDateString(

      undefined,

      {

        year: "numeric",

        month: "short",

        day: "numeric",

      },

    );

}

export default function DashboardHeader({

  project,

}) {

  if (!project) {

    return null;

  }

  return (

    <section className="dashboard-header">

      <div className="dashboard-header-left">

        <div

          className="dashboard-project-icon"

          style={{

            background:

              project.color,

          }}

        >

          {project.icon}

        </div>

        <div className="dashboard-title">

          <h1>

            {project.name}

          </h1>

          <p>

            {

              project.template ||

              "Blank"

            } Template

          </p>

        </div>

      </div>

      <div className="dashboard-header-right">

        {

          project.favorite && (

            <span className="dashboard-favorite">

              ⭐ Favorite

            </span>

          )

        }

        <div className="dashboard-meta">

          <div>

            <strong>

              Created

            </strong>

            <span>

              {

                formatDate(

                  project.createdAt,

                )

              }

            </span>

          </div>

          <div>

            <strong>

              Last Opened

            </strong>

            <span>

              {

                formatDate(

                  project.lastOpened,

                )

              }

            </span>

          </div>

        </div>

        {

          project.tags?.length > 0 && (

            <div className="dashboard-tags">

              {

                project.tags.map(

                  tag => (

                    <span

                      key={tag}

                    >

                      {tag}

                    </span>

                  ),

                )

              }

            </div>

          )

        }

      </div>

    </section>

  );

}
