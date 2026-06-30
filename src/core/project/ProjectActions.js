import ProjectStore from "./ProjectStore";
import createProject from "./defaultProject";
import ProjectEvents from "./ProjectEvents";
import ProjectEventTypes from "./ProjectEventTypes";

class ProjectActions {

  /*
  ==========================
      CREATE
  ==========================
  */

  createProject({

    name = "Untitled Project",

    description = "",

  } = {}) {

    const project = createProject({

      name,

      description,

    });

    const state =

      ProjectStore.getState();

    ProjectStore.setState({

      projects: [

        ...state.projects,

        project,

      ],

      activeProjectId:

        project.id,

    });

    return project;

  }

  ProjectEvents.emit(

  ProjectEventTypes.PROJECT_CREATED,

  project,

);

  /*
  ==========================
      OPEN
  ==========================
  */

  openProject(

    id,

  ) {

    const project =

      ProjectStore.getProject(

        id,

      );

    if (!project) {

      return;

    }

    ProjectStore.setState({

      activeProjectId:

        id,

    });

    ProjectEvents.emit(

  ProjectEventTypes.PROJECT_OPENED,

  project,

);

  }

  /*
  ==========================
      RENAME
  ==========================
  */

  renameProject(

    id,

    name,

  ) {

    const state =

      ProjectStore.getState();

    ProjectStore.setState({

      projects:

        state.projects.map(

          project =>

            project.id === id

              ? {

                  ...project,

                  name,

                  updatedAt:

                    Date.now(),

                }

              : project,

        ),

    });

  }

  ProjectEvents.emit(

  ProjectEventTypes.PROJECT_RENAMED,

  {

    id,

    name,

  },

);

  /*
  ==========================
      UPDATE
  ==========================
  */

  updateProject(

    id,

    values,

  ) {

    const state =

      ProjectStore.getState();

    ProjectStore.setState({

      projects:

        state.projects.map(

          project =>

            project.id === id

              ? {

                  ...project,

                  ...values,

                  updatedAt:

                    Date.now(),

                }

              : project,

        ),

    });

  }

  /*
  ==========================
      DELETE
  ==========================
  */

  deleteProject(

    id,

  ) {

    const state =

      ProjectStore.getState();

    const projects =

      state.projects.filter(

        project =>

          project.id !== id,

      );

    let activeProjectId =

      state.activeProjectId;

    if (

      activeProjectId === id

    ) {

      activeProjectId =

        projects.length > 0

          ? projects[0].id

          : null;

    }

    ProjectStore.setState({

      projects,

      activeProjectId,

    });

  }

  /*
  ==========================
      DUPLICATE
  ==========================
  */

  duplicateProject(

    id,

  ) {

    const project =

      ProjectStore.getProject(

        id,

      );

    if (!project) {

      return;

    }

    const copy =

      structuredClone(

        project,

      );

    copy.id =

      crypto.randomUUID();

    copy.name =

      `${project.name} Copy`;

    copy.createdAt =

      Date.now();

    copy.updatedAt =

      Date.now();

    const state =

      ProjectStore.getState();

    ProjectStore.setState({

      projects: [

        ...state.projects,

        copy,

      ],

      activeProjectId:

        copy.id,

    });

  }

  /*
  ==========================
      CLOSE
  ==========================
  */

  closeProject() {

    ProjectStore.setState({

      activeProjectId:

        null,

    });

  }

}

export default new ProjectActions();
