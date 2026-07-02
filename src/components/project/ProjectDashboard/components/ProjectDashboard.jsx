import "./ProjectDashboard.css";

import useProject from "../../../hooks/project/useProject";

import DashboardHeader from "./components/DashboardHeader";

export default function ProjectDashboard() {

  const {

    activeProject,

  } = useProject();

  return (

    <div className="project-dashboard">

      <DashboardHeader

        project={

          activeProject

        }

      />

    </div>

  );

}
