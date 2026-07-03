import { useState } from "react";

import "./ProjectDashboard.css";

import useProject from "../../../hooks/project/useProject";

import DashboardHeader from "./components/DashboardHeader";
import StatisticsGrid from "./components/StatisticsGrid";
import ActivityTimeline from "./components/ActivityTimeline";

import ProjectRename from "../ProjectRename/ProjectRename";
import ProjectSettings from "../ProjectSettings/ProjectSettings";

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

  if (

    !activeProject

  ) {

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

        {/* ==========================
            DASHBOARD GRID
        ========================== */}

        <div className="dashboard-grid">

          <div className="widget-large">

            <StatisticsGrid

              project={activeProject}

            />

          </div>

          <div className="widget-full">

            <ActivityTimeline

              activities={

                activeProject.activities ||

                []

              }

            />

          </div>

        </div>

      </div>

      {/* ==========================
          RENAME
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
          SETTINGS
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
