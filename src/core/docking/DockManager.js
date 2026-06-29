import defaultDockLayout from "./defaultDockLayout";
import DockStorage from "./DockStorage";
import DockRegistry from "./DockRegistry";

class DockManager {

  constructor() {

    this.layout =

      structuredClone(

        defaultDockLayout,

      );

    this.listeners = [];

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    const saved =

      DockStorage.load();

    if (saved) {

      this.layout = saved;

    } else {

      DockStorage.save(

        this.layout,

      );

    }

  }

  /*
  ==========================
      GET
  ==========================
  */

  getLayout() {

    return this.layout;

  }

  /*
  ==========================
      PANEL
  ==========================
  */

  getPanel(id) {

    return

      this.layout.panels[id];

  }

   /*
  ==========================
      GET PANEL
  ==========================
  */

  getPanels() {

  return DockRegistry.getAll();

}

  /*
  ==========================
      UPDATE
  ==========================
  */

  updatePanel(

    id,

    values,

  ) {

    if (

      !this.layout.panels[id]

    ) {

      return;

    }

    this.layout = {

      ...this.layout,

      panels: {

        ...this.layout.panels,

        [id]: {

          ...this.layout.panels[id],

          ...values,

        },

      },

    };

    DockStorage.save(

      this.layout,

    );

    this.notify();

  }

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  subscribe(listener) {

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

          this.layout,

        ),

    );

  }

}

/*
==========================
    DOCK POSITION
==========================
*/

setDockPosition(

  id,

  dock,

) {

  const positions = [

    "left",

    "right",

    "bottom",

  ];

  if (

    !positions.includes(

      dock,

    )

  ) {

    return;

  }

  this.updatePanel(

    id,

    {

      dock,

    },

  );

}

getDockPosition(

  id,

) {

  return

    this.layout

      .panels[id]

      ?.dock ||

    "right";

}

export default new DockManager();
