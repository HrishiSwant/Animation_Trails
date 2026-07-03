import { useState } from "react";

import "./ProjectDashboard.css";

import useProject from "../../../hooks/project/useProject";

import DashboardHeader from "./components/DashboardHeader";
import StatisticsGrid from "./components/StatisticsGrid";

import ProjectRename from "../ProjectRename/ProjectRename";
import ProjectSettings from "../ProjectSettings/ProjectSettings";
import ActivityTimeline from "./components/ActivityTimeline";

export default function ProjectDashboard() {

  const [

    renameOpen,

    setRenameOpen,

  ] = useState(false);

  const [

    settingsOpen,

    setSettingsOpen,

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

            setSettingsOpen(true)

          }

        />

        <StatisticsGrid

          project={activeProject}

        />

        <ActivityTimeline

          activities={[]}

          />

      </div>

      {/* ==========================
          Rename
      ========================== */}

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

      {/* ==========================
          Settings
      ========================== */}

      <ProjectSettings

        open={settingsOpen}

        project={activeProject}

        onClose={() =>

          setSettingsOpen(false)

        }

        onSave={updates => {

          updateProject(

            activeProject.id,

            updates,

          );

        }}

      />

    </>

  );

}
