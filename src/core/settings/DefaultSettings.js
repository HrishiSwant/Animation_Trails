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

    fullscreen: false,

    autoPlay: false,

    interval: 5000,

    transition: "fade",

    showProgress: true,

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

    defaultTool: "pen",

    showGrid: true,

    snapToGrid: false,

    smoothDrawing: true,

  },

  /*
  ==========================
      ASSETS
  ==========================
  */

  assets: {

    showPreview: true,

    confirmDelete: true,

    showHidden: false,

    defaultSort: "newest",

  },

  /*
  ==========================
      TASKS
  ==========================
  */

  tasks: {

    showCompleted: true,

    confirmDelete: true,

    showStatistics: true,

    defaultSort: "newest",

  },

  /*
  ==========================
      STORAGE
  ==========================
  */

  storage: {

    showStatistics: true,

    confirmClear: true,

    autoCleanup: false,

    unit: "mb",

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

    reduceMotion: false,

    largeText: false,

    showFocus: true,

    contrast: "normal",

  },

  /*
  ==========================
      DEVELOPER
  ==========================
  */

  developer: {

    developerMode: false,

    showDebugInfo: false,

    performanceMonitor: false,

    logLevel: "error",

  },

};

export default DefaultSettings;
