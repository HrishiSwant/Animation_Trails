import ProjectStore from "./ProjectStore";
import ProjectStorage from "./ProjectStorage";
import ProjectActions from "./ProjectActions";
import createProject from "./defaultProject";

class ProjectManager {

  constructor() {

    this.unsubscribe = null;

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    const saved =

      ProjectStorage.load();

    /*
    ==========================
        RESTORE
    ==========================
    */

    if (

      saved &&

      Array.isArray(

        saved.projects,

      ) &&

      saved.projects.length > 0

    ) {

      ProjectStore.setState({

        projects:

          saved.projects,

        activeProjectId:

          saved.activeProjectId ??

          saved.projects[0].id,

      });

    }

    /*
    ==========================
        FIRST PROJECT
    ==========================
    */

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

    this.unsubscribe?.();

    this.unsubscribe =

      ProjectStore.subscribe(

        state =>

          ProjectStorage.save(

            state,

          ),

      );

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  save() {

    ProjectStorage.save(

      ProjectStore.getState(),

    );

  }

  /*
  ==========================
      RESTORE
  ==========================
  */

  restore() {

    return ProjectStorage.load();

  }

  /*
  ==========================
      RESET
  ==========================
  */

  reset() {

    ProjectStorage.clear();

    ProjectStore.reset();

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

    return ProjectActions.duplicateProject(

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
