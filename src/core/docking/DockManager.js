import defaultDockLayout from "./defaultDockLayout";
import DockStorage from "./DockStorage";
import DockRegistry from "./DockRegistry";
import DockAnimator from "./DockAnimator";

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

      this.layout = {

        ...defaultDockLayout,

        ...saved,

        panels: {

          ...defaultDockLayout.panels,

          ...saved.panels,

        },

      };

    } else {

      this.layout =

        structuredClone(

          defaultDockLayout,

        );

      DockStorage.save(

        this.layout,

      );

    }

  }

  /*
  ==========================
      RESET
  ==========================
  */

  reset() {

    this.layout =

      structuredClone(

        defaultDockLayout,

      );

    DockStorage.save(

      this.layout,

    );

    this.notify();

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

    return this.layout.panels[id];

  }

  /*
  ==========================
      GET PANELS
  ==========================
  */

  getPanels() {

    return DockRegistry.getAll();

  }

  /*
  ==========================
      GET VISIBLE PANELS
  ==========================
  */

  getVisiblePanels() {

    return Object.entries(

      this.layout.panels,

    )

      .filter(

        ([, panel]) =>

          panel.visible,

      )

      .sort(

        ([, a], [, b]) =>

          a.order - b.order,

      )

      .map(

        ([id, panel]) => ({

          id,

          ...panel,

          definition:

            DockRegistry.get(id),

        }),

      );

  }

  /*
  ==========================
      UPDATE PANEL
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

    if (

      this.getDockPosition(id) === dock

    ) {

      return;

    }

    DockAnimator.animate(() => {

      this.updatePanel(

        id,

        {

          dock,

        },

      );

    });

  }

  getDockPosition(

    id,

  ) {

    return (

      this.layout.panels[id]?.dock ||

      "right"

    );

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
