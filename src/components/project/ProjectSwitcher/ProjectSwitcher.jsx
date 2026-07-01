import { useEffect, useRef, useState } from "react";

import "./ProjectSwitcher.css";

import useProject from "../../../hooks/project/useProject";
import ProjectCreator from "../ProjectCreator/ProjectCreator";

export default function ProjectSwitcher() {

  const [

    open,

    setOpen,

  ] = useState(false);

  const [

    isCreatorOpen,

    setIsCreatorOpen,

  ] = useState(false);

  const wrapperRef =

    useRef(null);

  const {

    projects,

    activeProject,

    openProject,

  } = useProject();

  /*
  ==========================
      CLOSE ON OUTSIDE CLICK
  ==========================
  */

  useEffect(() => {

    function handleClick(event) {

      if (

        wrapperRef.current &&

        !wrapperRef.current.contains(

          event.target,

        )

      ) {

        setOpen(false);

      }

    }

    document.addEventListener(

      "mousedown",

      handleClick,

    );

    return () =>

      document.removeEventListener(

        "mousedown",

        handleClick,

      );

  }, []);

  /*
  ==========================
      SWITCH PROJECT
  ==========================
  */

  function handleProjectClick(

    project,

  ) {

    openProject(

      project.id,

    );

    setOpen(false);

  }

  /*
  ==========================
      OPEN PROJECT CREATOR
  ==========================
  */

  function handleNewProject() {

    setOpen(false);

    setIsCreatorOpen(true);

  }

  return (

    <div

      ref={wrapperRef}

      className="project-switcher"

    >

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

                      className={

                        project.id ===

                        activeProject?.id

                          ? "project-item active"

                          : "project-item"

                      }

                      onClick={() =>

                        handleProjectClick(

                          project,

                        )

                      }

                    >

                      <span>

                        {

                          project.id ===

                          activeProject?.id

                            ? "✔ "

                            : ""

                        }

                      </span>

                      {project.name}

                    </button>

                  ),

                )

              )

            }

            <div className="project-divider" />

            <button

              className="project-new"

              onClick={handleNewProject}

            >

              + New Project

            </button>

          </div>

        )

      }

      <ProjectCreator

        open={isCreatorOpen}

        onClose={() =>

          setIsCreatorOpen(false)

        }

      />

    </div>

  );

}
