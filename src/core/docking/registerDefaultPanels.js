import DockRegistry from "./DockRegistry";

export default function registerDefaultPanels() {

  DockRegistry.register({

    id: "inspector",

    title: "Inspector",

    dock: "right",

    visible: true,

    order: 0,

  });

}
