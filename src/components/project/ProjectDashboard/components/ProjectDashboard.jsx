import { useState } from "react";

import "./ProjectDashboard.css";

import useProject from "../../../hooks/project/useProject";

import DashboardHeader from "./components/DashboardHeader";
import ProjectRename from "../ProjectRename/ProjectRename";

export default function ProjectDashboard() {

  const [

    renameOpen,

    setRenameOpen,

  ] = useState(false);

  const {

    activeProject,

    projects,

    renameProject,

    duplicateProject,

    updateProject,

  } = useProject();

  if (!activeProject) {

    return null;

  }

  return (

    <>

      <div className="project-dashboard">

        <DashboardHeader

          project={activeProject}

          onRename={() =>

            setRenameOpen(true)

          }

          onDuplicate={() =>

            duplicateProject(

              activeProject.id,

            )

          }

          onFavorite={() =>

            updateProject(

              activeProject.id,

              {

                favorite:

                  !activeProject.favorite,

              },

            )

          }

          onSettings={() =>

            alert(

              "Project Settings will be added in D-1.5",

            )

          }

        />

      </div>

      <ProjectRename

        open={renameOpen}

        project={activeProject}

        projects={projects}

        onClose={() =>

          setRenameOpen(false)

        }

        onRename={name => {

          renameProject(

            activeProject.id,

            name,

          );

          setRenameOpen(false);

        }}

      />

    </>

  );

}
