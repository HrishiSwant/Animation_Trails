import createProject from "./defaultProject";

const templates = [

  {
    id: "blank",
    name: "Blank",
    description: "Start with an empty workspace.",
    icon: "📁",
    color: "#6b7280",
  },

  {
    id: "animation",
    name: "Animation",
    description: "Workspace optimized for animation projects.",
    icon: "🎬",
    color: "#3b82f6",
  },

  {
    id: "ui",
    name: "UI Design",
    description: "Perfect for UI/UX and component design.",
    icon: "🎨",
    color: "#8b5cf6",
  },

  {
    id: "presentation",
    name: "Presentation",
    description: "Create presentations and slides.",
    icon: "📽️",
    color: "#f97316",
  },

  {
    id: "web",
    name: "Web Project",
    description: "Frontend and website development.",
    icon: "💻",
    color: "#22c55e",
  },

];

const ProjectTemplates = {

  /*
  ==========================
      TEMPLATE LIST
  ==========================
  */

  getAll() {

    return templates;

  },

  /*
  ==========================
      TEMPLATE INFO
  ==========================
  */

  get(id) {

    return templates.find(

      template =>

        template.id === id,

    );

  },

  /*
  ==========================
      CREATE PROJECT
  ==========================
  */

  create(id) {

    switch (id) {

      case "animation":
        return this.animation();

      case "ui":
        return this.ui();

      case "presentation":
        return this.presentation();

      case "web":
        return this.web();

      default:
        return this.blank();

    }

  },

  /*
  ==========================
      BLANK
  ==========================
  */

  blank() {

    const project = createProject({

      name: "Untitled Project",

    });

    project.template = "blank";
    project.icon = "📁";
    project.color = "#6b7280";
    project.activities = [];

    return project;

  },

  /*
  ==========================
      ANIMATION
  ==========================
  */

  animation() {

    const project = createProject({

      name: "Animation Project",

    });

    project.template = "animation";
    project.icon = "🎬";
    project.color = "#3b82f6";
    project.activities = [];

    project.tags.push(

      "animation",

    );

    return project;

  },

  /*
  ==========================
      UI
  ==========================
  */

  ui() {

    const project = createProject({

      name: "UI Project",

    });

    project.template = "ui";
    project.icon = "🎨";
    project.color = "#8b5cf6";
    project.activities = [];

    project.tags.push(

      "ui",

    );

    return project;

  },

  /*
  ==========================
      PRESENTATION
  ==========================
  */

  presentation() {

    const project = createProject({

      name: "Presentation",

    });

    project.template = "presentation";
    project.icon = "📽️";
    project.color = "#f97316";
    project.activities = [];

    project.tags.push(

      "presentation",

    );

    return project;

  },

  /*
  ==========================
      WEB
  ==========================
  */

  web() {

    const project = createProject({

      name: "Web Project",

    });

    project.template = "web";
    project.icon = "💻";
    project.color = "#22c55e";
    project.activities = [];

    project.tags.push(

      "web",

    );

    return project;

  },

};

export default ProjectTemplates;
