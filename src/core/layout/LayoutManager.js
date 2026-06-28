import defaultLayout from "./defaultLayouts";
import LayoutStorage from "./LayoutStorage";

class LayoutManager {

  constructor() {

    this.layout = defaultLayout;

    this.listeners = [];

  }

  initialize() {

    const saved =

      LayoutStorage.load();

    if (saved) {

      this.layout = saved;

    }

  }

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

  getLayout() {

    return this.layout;

  }

  update(part, value) {

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

  subscribe(listener) {

    this.listeners.push(

      listener,

    );

    return () => {

      this.listeners =

        this.listeners.filter(

          l => l !== listener,

        );

    };

  }

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
