import "./FavoriteProjects.css";

import useProject from "../../../../hooks/project/useProject";

import FavoriteProjectCard from "./FavoriteProjectCard";

export default function FavoriteProjects() {

  const {

    projects,

    openProject,

  } = useProject();

  const favorites =

    projects.filter(

      project =>

        project.favorite,

    );

  return (

    <section className="favorite-projects">

      <div className="favorite-projects-header">

        <h2>

          ⭐ Favorite Projects

        </h2>

        <p>

          Quickly switch between your important projects.

        </p>

      </div>

      {

        favorites.length === 0 ? (

          <div className="favorite-projects-empty">

            No favorite projects yet.

          </div>

        ) : (

          <div className="favorite-projects-grid">

            {

              favorites.map(

                project => (

                  <FavoriteProjectCard

                    key={project.id}

                    project={project}

                    onOpen={openProject}

                  />

                ),

              )

            }

          </div>

        )

      }

    </section>

  );

}
