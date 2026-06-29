import DockRegistry from "./DockRegistry";

export default function registerDefaultPanels() {

  const panels = [

    {

      id: "inspector",

      title: "Inspector",

      dock: "right",

      visible: true,

      order: 0,

    },

    {

      id: "layers",

      title: "Layers",

      dock: "right",

      visible: false,

      order: 1,

    },

    {

      id: "history",

      title: "History",

      dock: "right",

      visible: false,

      order: 2,

    },

    {

      id: "timeline",

      title: "Timeline",

      dock: "bottom",

      visible: false,

      order: 3,

    },

    {

      id: "console",

      title: "Console",

      dock: "bottom",

      visible: false,

      order: 4,

    },

    {

      id: "properties",

      title: "Properties",

      dock: "right",

      visible: false,

      order: 5,

    },

    {

      id: "assistant",

      title: "AI Assistant",

      dock: "left",

      visible: false,

      order: 6,

    },

  ];

  panels.forEach(panel =>

    DockRegistry.register(panel)

  );

}
