function createProject({

  id = crypto.randomUUID(),

  name = "Untitled Project",

  description = "",

} = {}) {

  const now = Date.now();

  return {

    /*
    ==========================
        BASIC
    ==========================
    */

    id,

    name,

    description,

    version: 1,

    createdAt: now,

    updatedAt: now,

    /*
    ==========================
        WORKSPACE
    ==========================
    */

    workspace: {

      currentTool: "dashboard",

      presentation: false,

      zoom: 100,

    },

    /*
    ==========================
        CONTENT
    ==========================
    */

    notes: [],

    sketches: [],

    assets: [],

    tasks: [],

    documents: [],

    /*
    ==========================
        HISTORY
    ==========================
    */

    history: {

      undo: [],

      redo: [],

    },

    /*
    ==========================
        SETTINGS
    ==========================
    */

    settings: {

      theme: null,

      accent: null,

      font: null,

    },

    /*
    ==========================
        METADATA
    ==========================
    */

    tags: [],

    favorite: false,

    archived: false,

  };

}

export default createProject;
