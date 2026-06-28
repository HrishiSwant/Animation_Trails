import AccessibilityStorage from "./AccessibilityStorage";
import applyAccessibility from "./applyAccessibility";

class AccessibilityManager {

  constructor() {

    this.listeners = [];

    this.settings =
      AccessibilityStorage.load();

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    applyAccessibility(

      this.settings,

    );

  }

  /*
  ==========================
      GETTERS
  ==========================
  */

  getSettings() {

    return this.settings;

  }

  get(key) {

    return this.settings[key];

  }

  /*
  ==========================
      UPDATE
  ==========================
  */

  set(key, value) {

    this.settings = {

      ...this.settings,

      [key]: value,

    };

    AccessibilityStorage.save(

      this.settings,

    );

    applyAccessibility(

      this.settings,

    );

    this.notify();

  }

  reset() {

    AccessibilityStorage.clear();

    this.settings = {

      highContrast: false,

      reduceMotion: false,

      largeClickTargets: false,

      keyboardNavigation: true,

      focusIndicators: true,

    };

    applyAccessibility(

      this.settings,

    );

    this.notify();

  }

  /*
  ==========================
      EVENTS
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

  notify() {

    this.listeners.forEach(

      listener =>

        listener(

          this.settings,

        ),

    );

  }

}

const manager =
  new AccessibilityManager();

export default manager;
