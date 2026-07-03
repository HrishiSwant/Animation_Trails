import ProjectStore from "./ProjectStore";
import createProject from "./defaultProject";
import ProjectEvents from "./ProjectEvents";
import ProjectEventTypes from "./ProjectEventTypes";
import RecentProjects from "./RecentProjects";
import ProjectActivity from "./ProjectActivity";

class ProjectActions {

  /*
  ==========================
      CREATE
  ==========================
  */

  createProject(

    values = {},

  ) {

    const project = {

      ...createProject({

        name:

          values.name ??

          "Untitled Project",

        description:

          values.description ??

          "",

      }),

      ...values,

    };

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

    ProjectStore.addActivity(

  project.id,

  ProjectActivity.createActivity({

    type:

      ProjectActivity.ActivityTypes.PROJECT_CREATED,

    title:

      "Project Created",

    description:

      project.name,

    icon: "🎉",

  }),

);

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_CREATED,

      project,

    );

    RecentProjects.add(

      project,

    );

    return project;

  }

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

    ProjectStore.addActivity(

  id,

  ProjectActivity.createActivity({

    type:

      ProjectActivity.ActivityTypes.PROJECT_OPENED,

    title:

      "Project Opened",

    description:

      project.name,

    icon: "📂",

  }),

);

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_OPENED,

      project,

    );

    RecentProjects.add(

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

    const now =

      Date.now();

    const previousName =

  ProjectStore.getProject(

    id,

  )?.name || "";

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

                    now,

                }

              : project,

        ),

    });

    const updated =

      ProjectStore.getProject(

        id,

      );

    if (updated) {

  ProjectStore.addActivity(

    id,

    ProjectActivity.createActivity({

      type:

        ProjectActivity.ActivityTypes.PROJECT_RENAMED,

      title:

        "Project Renamed",

      description:

        `"${previousName}" → "${updated.name}"`,

      icon: "✏️",

    }),

  );

}

    if (updated) {

      RecentProjects.add(

        updated,

      );

    }

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_RENAMED,

      updated,

    );

  }

  /*
  ==========================
      UPDATE
  ==========================
  */

  updateProject(

    id,

    values,

  ) {

    const now =

      Date.now();

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

                    now,

                }

              : project,

        ),

    });

    const updated =

      ProjectStore.getProject(

        id,

      );

    if (updated) {

  ProjectStore.addActivity(

    id,

    ProjectActivity.createActivity({

      type:

        ProjectActivity.ActivityTypes.PROJECT_UPDATED,

      title:

        "Project Updated",

      description:

        "Project settings changed",

      icon: "⚙️",

    }),

  );

}

    if (updated) {

      RecentProjects.add(

        updated,

      );

    }

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_UPDATED,

      updated,

    );

  }

  /*
  ==========================
      DELETE
  ==========================
  */

  deleteProject(

    id,

  ) {

const project =

  ProjectStore.getProject(

    id,

  );

const project =

  ProjectStore.getProject(

    id,

  );

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

    RecentProjects.remove(

      id,

    );

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_DELETED,

      id,

    );

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

    const now =

      Date.now();

    const copy =

      structuredClone(

        project,

      );

    copy.activities = [];

    copy.id =

      crypto.randomUUID();

    copy.name =

      `${project.name} Copy`;

    copy.createdAt =

      now;

    copy.updatedAt =

      now;

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

    ProjectStore.addActivity(

  copy.id,

  ProjectActivity.createActivity({

    type:

      ProjectActivity.ActivityTypes.PROJECT_DUPLICATED,

    title:

      "Project Duplicated",

    description:

      `Copied from "${project.name}"`,

    icon: "📄",

  }),

);

    RecentProjects.add(

      copy,

    );

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_DUPLICATED,

      copy,

    );

    return copy;

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

    ProjectEvents.emit(

      ProjectEventTypes.PROJECT_CLOSED,

      null,

    );

  }

}

export default new ProjectActions();
