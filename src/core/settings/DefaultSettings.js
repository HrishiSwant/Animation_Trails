const DefaultSettings = {

  /*
  ==========================
      APPEARANCE
  ==========================
  */

  appearance: {

    theme: "dark",

    accent: "#2563EB",

    fontSize: "medium",

    animations: true,

    compactMode: false,

  },

  /*
  ==========================
      WORKSPACE
  ==========================
  */

  workspace: {

    defaultTool: "dashboard",

    autosave: true,

    showWelcome: true,

  },

  /*
  ==========================
      PRESENTATION
  ==========================
  */

  presentation: {

    autoplay: false,

    interval: 5000,

    fullscreen: false,

    showOverlay: true,

  },

  /*
  ==========================
      NOTES
  ==========================
  */

  notes: {

    autosave: true,

    spellCheck: true,

    wordWrap: true,

    defaultSort: "newest",

  },

  /*
  ==========================
      SKETCH
  ==========================
  */

  sketch: {

    showGrid: true,

    snapToGrid: true,

    brushSize: 5,

  },

  /*
  ==========================
      ASSETS
  ==========================
  */

  assets: {

    thumbnailSize: "medium",

    showHidden: false,

    sort: "newest",

  },

  /*
  ==========================
      TASKS
  ==========================
  */

  tasks: {

    showCompleted: true,

    defaultSort: "priority",

    confirmDelete: true,

  },

  /*
  ==========================
      STORAGE
  ==========================
  */

  storage: {

    showUsage: true,

    autoCleanup: false,

  },

  /*
  ==========================
      EXPORT
  ==========================
  */

  export: {

    format: "json",

    includeMetadata: true,

  },

  /*
  ==========================
      ACCESSIBILITY
  ==========================
  */

  accessibility: {

    highContrast: false,

    reduceMotion: false,

    largeText: false,

  },

  /*
  ==========================
      DEVELOPER
  ==========================
  */

  developer: {

    debugMode: false,

    showLogs: false,

  },

};

export default DefaultSettings;
