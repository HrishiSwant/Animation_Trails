import layouts from "./defaultLayouts";
import LayoutStorage from "./LayoutStorage";

class LayoutManager {

  constructor() {

    this.layout = {

      ...layouts.default,

      preset: "default",

    };

    this.listeners = [];

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    const saved =

      LayoutStorage.load();

    if (saved) {

      this.layout = saved;

    } else {

      this.layout = {

        ...layouts.default,

        preset: "default",

      };

      LayoutStorage.save(

        this.layout,

      );

    }

  }

  /*
  ==========================
      PRESET
  ==========================
  */

  setPreset(name) {

    if (

      !layouts[name]

    ) {

      return;

    }

    this.layout = {

      ...layouts[name],

      preset: name,

    };

    LayoutStorage.save(

      this.layout,

    );

    this.notify();

  }

  /*
  ==========================
      INSPECTOR
  ==========================
  */

  toggleInspector() {

    this.layout = {

      ...this.layout,

      inspector: {

        ...this.layout.inspector,

        visible:

          !this.layout.inspector.visible,

      },

    };

    LayoutStorage.save(

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
      UPDATE
  ==========================
  */

  update(

    part,

    value,

  ) {

    this.layout = {

      ...this.layout,

      [part]: {

        ...this.layout[part],

        ...value,

      },

    };

    LayoutStorage.save(

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

export default new LayoutManager();
