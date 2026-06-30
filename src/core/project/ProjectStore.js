import createProject from "./defaultProject";

class ProjectStore {

  constructor() {

    const project = createProject();

    this.state = {

      projects: [

        project,

      ],

      activeProjectId:

        project.id,

    };

    this.listeners = [];

  }

  /*
  ==========================
      GET STATE
  ==========================
  */

  getState() {

    return this.state;

  }

  /*
  ==========================
      GET PROJECTS
  ==========================
  */

  getProjects() {

    return this.state.projects;

  }

  /*
  ==========================
      GET ACTIVE PROJECT
  ==========================
  */

  getActiveProject() {

    return this.state.projects.find(

      project =>

        project.id ===

        this.state.activeProjectId,

    ) || null;

  }

  /*
  ==========================
      GET PROJECT
  ==========================
  */

  getProject(

    id,

  ) {

    return this.state.projects.find(

      project =>

        project.id === id,

    ) || null;

  }

  /*
  ==========================
      SET STATE
  ==========================
  */

  setState(

    values,

  ) {

    this.state = {

      ...this.state,

      ...values,

    };

    this.notify();

  }

  /*
  ==========================
      RESET
  ==========================
  */

  reset() {

    const project =

      createProject();

    this.state = {

      projects: [

        project,

      ],

      activeProjectId:

        project.id,

    };

    this.notify();

  }

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  subscribe(

    listener,

  ) {

    this.listeners.push(

      listener,

    );

    return () => {

      this.listeners =

        this.listeners.filter(

          item =>

            item !== listener,

        );

    };

  }

  /*
  ==========================
      NOTIFY
  ==========================
  */

  notify() {

    this.listeners.forEach(

      listener =>

        listener(

          this.state,

        ),

    );

  }

}

export default new ProjectStore();
