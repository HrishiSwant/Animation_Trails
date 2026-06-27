import AccentStorage from "./AccentStorage";
import applyAccent from "./applyAccent";

class AccentManager {

  constructor() {

    this.listeners = [];

    this.defaultAccent = "#2563EB";

    this.currentAccent =
      AccentStorage.load() ||
      this.defaultAccent;

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    applyAccent(

      this.currentAccent

    );

  }

  /*
  ==========================
      GETTERS
  ==========================
  */

  getAccent() {

    return this.currentAccent;

  }

  /*
  ==========================
      SETTERS
  ==========================
  */

  setAccent(color) {

    if (!color) return;

    this.currentAccent = color;

    AccentStorage.save(

      color

    );

    applyAccent(

      color

    );

    this.notify();

  }

  reset() {

    this.currentAccent =
      this.defaultAccent;

    AccentStorage.clear();

    applyAccent(

      this.currentAccent

    );

    this.notify();

  }

  /*
  ==========================
      EVENTS
  ==========================
  */

  subscribe(listener) {

    this.listeners.push(listener);

    return () => {

      this.listeners =
        this.listeners.filter(

          item => item !== listener

        );

    };

  }

  notify() {

    this.listeners.forEach(

      listener =>

        listener(

          this.currentAccent

        )

    );

  }

}

export default new AccentManager();
