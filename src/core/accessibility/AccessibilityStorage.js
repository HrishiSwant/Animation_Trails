const STORAGE_KEY =
  "hrishi-studio-accessibility";

class AccessibilityStorage {

  load() {

    const raw =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!raw) {

      return {

        highContrast: false,

        reduceMotion: false,

        largeClickTargets: false,

        keyboardNavigation: true,

        focusIndicators: true,

      };

    }

    try {

      return JSON.parse(raw);

    } catch {

      return {

        highContrast: false,

        reduceMotion: false,

        largeClickTargets: false,

        keyboardNavigation: true,

        focusIndicators: true,

      };

    }

  }

  save(settings) {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(settings),

    );

  }

  clear() {

    localStorage.removeItem(

      STORAGE_KEY,

    );

  }

}

const storage =
  new AccessibilityStorage();

export default storage;
