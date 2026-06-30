import ProjectStore from "./ProjectStore";
import ProjectStorage from "./ProjectStorage";
import ProjectActions from "./ProjectActions";
import createProject from "./defaultProject";

class ProjectManager {

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    const saved =

      ProjectStorage.load();

    if (

      saved &&

      Array.isArray(

        saved.projects,

      )

    ) {

      ProjectStore.setState({

        projects:

          saved.projects,

        activeProjectId:

          saved.activeProjectId ??

          saved.projects[0]?.id ??

          null,

      });

    }

    else {

      const project =

        createProject();

      ProjectStore.setState({

        projects: [

          project,

        ],

        activeProjectId:

          project.id,

      });

      ProjectStorage.save(

        ProjectStore.getState(),

      );

    }

    /*
    ==========================
        AUTO SAVE
    ==========================
    */

    ProjectStore.subscribe(

      state =>

        ProjectStorage.save(

          state,

        ),

    );

  }

  /*
  ==========================
      GET
  ==========================
  */

  getProjects() {

    return ProjectStore.getProjects();

  }

  getProject(

    id,

  ) {

    return ProjectStore.getProject(

      id,

    );

  }

  getActiveProject() {

    return ProjectStore.getActiveProject();

  }

  /*
  ==========================
      ACTIONS
  ==========================
  */

  createProject(

    options,

  ) {

    return ProjectActions.createProject(

      options,

    );

  }

  openProject(

    id,

  ) {

    ProjectActions.openProject(

      id,

    );

  }

  closeProject() {

    ProjectActions.closeProject();

  }

  renameProject(

    id,

    name,

  ) {

    ProjectActions.renameProject(

      id,

      name,

    );

  }

  updateProject(

    id,

    values,

  ) {

    ProjectActions.updateProject(

      id,

      values,

    );

  }

  duplicateProject(

    id,

  ) {

    ProjectActions.duplicateProject(

      id,

    );

  }

  deleteProject(

    id,

  ) {

    ProjectActions.deleteProject(

      id,

    );

  }

}

export default new ProjectManager();
