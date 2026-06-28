import CompactStorage from "./CompactStorage";
import applyCompact from "./applyCompact";

class CompactManager {

  constructor() {

    this.listeners = [];

    this.enabled =
      CompactStorage.load();

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    applyCompact(

      this.enabled,

    );

  }

  /*
  ==========================
      GETTERS
  ==========================
  */

  isEnabled() {

    return this.enabled;

  }

  /*
  ==========================
      SETTERS
  ==========================
  */

  setEnabled(enabled) {

    this.enabled =
      Boolean(enabled);

    CompactStorage.save(

      this.enabled,

    );

    applyCompact(

      this.enabled,

    );

    this.notify();

    return this.enabled;

  }

  toggle() {

    return this.setEnabled(

      !this.enabled,

    );

  }

  reset() {

    CompactStorage.clear();

    this.enabled = false;

    applyCompact(

      false,

    );

    this.notify();

    return false;

  }

  /*
  ==========================
      EVENTS
  ==========================
  */

  subscribe(listener) {

    this.listeners.push(
      listener
    );

    return () => {

      this.listeners =
        this.listeners.filter(

          item =>

            item !== listener

        );

    };

  }

  notify() {

    this.listeners.forEach(

      listener =>

        listener(

          this.enabled

        )

    );

  }

}

const manager =
  new CompactManager();

export default manager;
