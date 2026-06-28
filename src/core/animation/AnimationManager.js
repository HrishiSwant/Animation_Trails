import AnimationStorage from "./AnimationStorage";
import applyAnimations from "./applyAnimations";

class AnimationManager {

  constructor() {

    this.listeners = [];

    this.enabled =
      AnimationStorage.load();

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    applyAnimations(

      this.enabled

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

    AnimationStorage.save(

      this.enabled

    );

    applyAnimations(

      this.enabled

    );

    this.notify();

    return this.enabled;

  }

  toggle() {

    return this.setEnabled(

      !this.enabled

    );

  }

  reset() {

    AnimationStorage.clear();

    this.enabled = true;

    applyAnimations(

      true

    );

    this.notify();

    return true;

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
  new AnimationManager();

export default manager;
