import defaultDockLayout from "./defaultDockLayout";
import DockStorage from "./DockStorage";

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

export default new DockManager();
