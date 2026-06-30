import createProject from "./defaultProject";

const ProjectTemplates = {

  blank() {

    return createProject({

      name: "Untitled Project",

    });

  },

  animation() {

    const project = createProject({

      name: "Animation Project",

    });

    project.tags.push(

      "animation",

    );

    return project;

  },

  ui() {

    const project = createProject({

      name: "UI Project",

    });

    project.tags.push(

      "ui",

    );

    return project;

  },

  presentation() {

    const project = createProject({

      name: "Presentation",

    });

    project.tags.push(

      "presentation",

    );

    return project;

  },

};

export default ProjectTemplates;
