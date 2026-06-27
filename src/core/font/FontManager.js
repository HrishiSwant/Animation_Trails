import FontStorage from "./FontStorage";
import applyFontSize from "./applyFontSize";

class FontManager {

  constructor() {

    this.listeners = [];

    this.defaultSize = "medium";

    this.currentSize =

      FontStorage.load() ||

      this.defaultSize;

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    applyFontSize(

      this.currentSize

    );

  }

  /*
  ==========================
      GETTERS
  ==========================
  */

  getFontSize() {

    return this.currentSize;

  }

  getAvailableSizes() {

    return [

      "small",

      "medium",

      "large",

    ];

  }

  /*
  ==========================
      SETTERS
  ==========================
  */

  setFontSize(size) {

    if (!size) {

      return;

    }

    if (

      size === this.currentSize

    ) {

      return;

    }

    this.currentSize = size;

    FontStorage.save(

      size

    );

    applyFontSize(

      size

    );

    this.notify();

  }

  reset() {

    this.currentSize =

      this.defaultSize;

    FontStorage.clear();

    applyFontSize(

      this.currentSize

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

          this.currentSize

        )

    );

  }

}

export default new FontManager();
