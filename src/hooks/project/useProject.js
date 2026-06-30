import {

  useEffect,

  useState,

} from "react";

import ProjectStore from "../../core/project/ProjectStore";
import ProjectActions from "../../core/project/ProjectActions";

export default function useProject() {

  const [

    state,

    setState,

  ] = useState(

    ProjectStore.getState(),

  );

  useEffect(() => {

    return ProjectStore.subscribe(

      setState,

    );

  }, []);

  return {

    /*
    ==========================
        STATE
    ==========================
    */

    ...state,

    activeProject:

      ProjectStore.getActiveProject(),

    /*
    ==========================
        GETTERS
    ==========================
    */

    getProject:

      ProjectStore.getProject.bind(

        ProjectStore,

      ),

    getProjects:

      ProjectStore.getProjects.bind(

        ProjectStore,

      ),

    /*
    ==========================
        ACTIONS
    ==========================
    */

    createProject:

      ProjectActions.createProject.bind(

        ProjectActions,

      ),

    openProject:

      ProjectActions.openProject.bind(

        ProjectActions,

      ),

    closeProject:

      ProjectActions.closeProject.bind(

        ProjectActions,

      ),

    renameProject:

      ProjectActions.renameProject.bind(

        ProjectActions,

      ),

    updateProject:

      ProjectActions.updateProject.bind(

        ProjectActions,

      ),

    duplicateProject:

      ProjectActions.duplicateProject.bind(

        ProjectActions,

      ),

    deleteProject:

      ProjectActions.deleteProject.bind(

        ProjectActions,

      ),

  };

}
