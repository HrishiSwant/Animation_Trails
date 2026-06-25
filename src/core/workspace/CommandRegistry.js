const CommandRegistry = [

  /*
  ==========================
      WORKSPACE
  ==========================
  */

  {
    id: "workspace",

    title: "Open Workspace",

    category: "Workspace",

    icon: "🏠",

    action: "dashboard",

  },

  {
    id: "storage",

    title: "Open Storage Inspector",

    category: "Workspace",

    icon: "💾",

    action: "storage",

  },

  /*
  ==========================
      TOOLS
  ==========================
  */

  {
    id: "notes",

    title: "Open Notes",

    category: "Tools",

    icon: "📝",

    action: "notes",

  },

  {
    id: "sketch",

    title: "Open Sketch",

    category: "Tools",

    icon: "🎨",

    action: "sketch",

  },

  {
    id: "assets",

    title: "Open Assets",

    category: "Tools",

    icon: "📁",

    action: "assets",

  },

  /*
  ==========================
      EXPORT
  ==========================
  */

  {
    id: "export",

    title: "Open Export Center",

    category: "Export",

    icon: "📤",

    action: "export",

  },

];

export default CommandRegistry;
