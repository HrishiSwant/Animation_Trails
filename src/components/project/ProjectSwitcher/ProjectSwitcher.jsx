import { useEffect, useRef, useState } from "react";

import "./ProjectSwitcher.css";

import useProject from "../../../hooks/project/useProject";
import ProjectCreator from "../ProjectCreator/ProjectCreator";
import ProjectRename from "../ProjectRename/ProjectRename";

export default function ProjectSwitcher() {

  const [

    open,

    setOpen,

  ] = useState(false);

  const [

    isCreatorOpen,

    setIsCreatorOpen,

  ] = useState(false);

  const [

    menuProjectId,

    setMenuProjectId,

  ] = useState(null);

  const [

  renameProject,

  setRenameProject,

] = useState(null);

  const wrapperRef =

    useRef(null);

  const {

    projects,

    activeProject,

    openProject,

    renameProject: renameProjectAction,

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

        setMenuProjectId(null);

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

    setMenuProjectId(null);

  }

  /*
  ==========================
      OPEN PROJECT CREATOR
  ==========================
  */

  function handleNewProject() {

    setOpen(false);

    setMenuProjectId(null);

    setIsCreatorOpen(true);

  }

  return (

    <>

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

                      <div

                        key={project.id}

                        className="project-row"

                      >

                        <button

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

                        <button

                          type="button"

                          className="project-menu-button"

                          onClick={event => {

                            event.stopPropagation();

                            setMenuProjectId(

                              menuProjectId ===

                              project.id

                                ? null

                                : project.id,

                            );

                          }}

                        >

                          ⋮

                        </button>

                        {

                          menuProjectId ===

                            project.id && (

                            <div className="project-menu">

                              <button

                                onClick={() => {

                                  setRenameProject(project);

                                  setMenuProjectId(null);

                                  }}

                                >

                                Rename

                                </button>

                              <button>

                                Duplicate

                              </button>

                              <button>

                                Favorite

                              </button>

                              <button className="danger">

                                Delete

                              </button>

                            </div>

                          )

                        }

                      </div>

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

      </div>

      <ProjectCreator

        open={isCreatorOpen}

        onClose={() =>

          setIsCreatorOpen(false)

        }

      />

      <ProjectRename

  open={

    renameProject !== null

  }

  project={

    renameProject

  }

  onClose={() =>

    setRenameProject(null)

  }

  onRename={name => {

    renameProjectAction(

      renameProject.id,

      name,

    );

    setRenameProject(null);

  }}

/>

    </>

  );

}
