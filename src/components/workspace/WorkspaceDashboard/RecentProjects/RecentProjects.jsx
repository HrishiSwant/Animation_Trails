import "./RecentProjects.css";

import useProject from "../../../../hooks/project/useProject";

import RecentProjectCard from "./RecentProjectCard";

export default function RecentProjects() {

  const {

    projects,

    openProject,

  } = useProject();

  const recent =

    [...projects]

      .sort(

        (a, b) =>

          (b.lastOpened || 0) -

          (a.lastOpened || 0),

      )

      .slice(0, 5);

  return (

    <section className="recent-projects">

      <div className="recent-projects-header">

        <h2>

          🕒 Recent Projects

        </h2>

        <p>

          Continue where you left off.

        </p>

      </div>

      <div className="recent-projects-grid">

        {

          recent.map(

            project => (

              <RecentProjectCard

                key={project.id}

                project={project}

                onOpen={

                  openProject

                }

              />

            ),

          )

        }

      </div>

    </section>

  );

}
