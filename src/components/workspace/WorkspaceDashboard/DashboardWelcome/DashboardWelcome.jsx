import "./DashboardWelcome.css";

import useProject from "../../../../hooks/project/useProject";

export default function DashboardWelcome() {

  const {

    activeProject,

    projects,

  } = useProject();

  const hour = new Date().getHours();

  let greeting = "Hello";
  let icon = "👋";

  if (hour < 12) {

    greeting = "Good Morning";
    icon = "🌅";

  } else if (hour < 18) {

    greeting = "Good Afternoon";
    icon = "☀";

  } else {

    greeting = "Good Evening";
    icon = "🌙";

  }

  return (

    <section className="dashboard-welcome">

      <div className="dashboard-welcome-left">

        <h1>

          {icon} {greeting}

        </h1>

        <p>

          Welcome back to Hrishi Studio.

        </p>

      </div>

      <div className="dashboard-welcome-right">

        {

          activeProject ? (

            <>

              <h3>

                Continue Working

              </h3>

              <strong>

                {activeProject.name}

              </strong>

              <span>

                {projects.length} Projects

              </span>

            </>

          ) : (

            <>

              <h3>

                Workspace Ready

              </h3>

              <strong>

                Create your first project

              </strong>

            </>

          )

        }

      </div>

    </section>

  );

}
