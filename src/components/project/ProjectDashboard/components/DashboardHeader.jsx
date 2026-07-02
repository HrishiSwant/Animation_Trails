import "./ProjectDashboard.css";

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

        <div>

          <h1>

            {project.name}

          </h1>

          <p>

            {

              project.template ||

              "Blank"

            }

            {" "}Template

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

      </div>

    </section>

  );

}
