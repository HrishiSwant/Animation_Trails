import { useState } from "react";

import "./ProjectSwitcher.css";

import useProject from "../../../hooks/project/useProject";

export default function ProjectSwitcher() {

  const [

    open,

    setOpen,

  ] = useState(false);

  const {

    projects,

    activeProject,

  } = useProject();

  return (

    <div className="project-switcher">

      <button

        className="project-switcher-button"

        onClick={() =>

          setOpen(

            value => !value,

          )

        }

      >

        <span>

          ▼

        </span>

        <span>

          {

            activeProject?.name ||

            "No Project"

          }

        </span>

      </button>

      {

        open && (

          <div className="project-dropdown">

            {

              projects.length === 0 ? (

                <div className="project-empty">

                  No Projects

                </div>

              ) : (

                projects.map(

                  project => (

                    <button

                      key={project.id}

                      className="project-item"

                    >

                      {project.name}

                    </button>

                  ),

                )

              )

            }

            <div className="project-divider" />

            <button

              className="project-new"

            >

              + New Project

            </button>

          </div>

        )

      }

    </div>

  );

}
