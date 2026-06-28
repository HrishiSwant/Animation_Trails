import CommandManager from "./CommandManager";

let initialized = false;

export default function registerDefaultCommands({

  navigate,

  actions = {},

}) {

  if (initialized) {

    return;

  }

  initialized = true;

  /*
  ==========================
      NAVIGATION
  ==========================
  */

  CommandManager.register({

    id: "open-library",

    title: "Open Library",

    description: "Go to the animation library.",

    category: "Navigation",

    action() {

      navigate("library");

    },

  });

  CommandManager.register({

    id: "open-workspace",

    title: "Open Workspace",

    description: "Open the creative workspace.",

    category: "Navigation",

    action() {

      navigate("workspace");

    },

  });

  CommandManager.register({

    id: "open-presentation",

    title: "Open Presentation",

    description: "Open presentation mode.",

    category: "Navigation",

    action() {

      navigate("presentation");

    },

  });

  CommandManager.register({

    id: "open-settings",

    title: "Open Settings",

    description: "Open application settings.",

    category: "Navigation",

    action() {

      navigate("settings");

    },

  });

  /*
  ==========================
      APPEARANCE
  ==========================
  */

  if (actions.toggleTheme) {

    CommandManager.register({

      id: "toggle-theme",

      title: "Toggle Theme",

      description: "Switch between light and dark mode.",

      category: "Appearance",

      action: actions.toggleTheme,

    });

  }

  if (actions.toggleAnimations) {

    CommandManager.register({

      id: "toggle-animations",

      title: "Toggle Animations",

      description: "Enable or disable UI animations.",

      category: "Appearance",

      action: actions.toggleAnimations,

    });

  }

  if (actions.toggleCompact) {

    CommandManager.register({

      id: "toggle-compact",

      title: "Toggle Compact Mode",

      description: "Enable or disable compact layout.",

      category: "Appearance",

      action: actions.toggleCompact,

    });

  }

  /*
  ==========================
      WORKSPACE
  ==========================
  */

  if (actions.openNotes) {

    CommandManager.register({

      id: "workspace-notes",

      title: "Open Notes",

      description: "Open Notes workspace.",

      category: "Workspace",

      action: actions.openNotes,

    });

  }

  if (actions.openSketch) {

    CommandManager.register({

      id: "workspace-sketch",

      title: "Open Sketch",

      description: "Open Sketch board.",

      category: "Workspace",

      action: actions.openSketch,

    });

  }

  if (actions.openAssets) {

    CommandManager.register({

      id: "workspace-assets",

      title: "Open Assets",

      description: "Open Asset Manager.",

      category: "Workspace",

      action: actions.openAssets,

    });

  }

  if (actions.openTasks) {

    CommandManager.register({

      id: "workspace-tasks",

      title: "Open Tasks",

      description: "Open Task Manager.",

      category: "Workspace",

      action: actions.openTasks,

    });

  }

}
