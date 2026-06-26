const STORAGE_KEY =
  "hrishi-studio:presentation";

const DEFAULT_SETTINGS = {

  currentSlide: 0,

  autoPlay: false,

  interval: 5000,

  fullscreen: false,

  showToolbar: true,

  showProgress: true,

  focusMode: false,

};

const PresentationStorage = {

  load() {

    try {

      const data =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (!data) {

        return {

          ...DEFAULT_SETTINGS,

        };

      }

      return {

        ...DEFAULT_SETTINGS,

        ...JSON.parse(data),

      };

    } catch {

      return {

        ...DEFAULT_SETTINGS,

      };

    }

  },

  save(settings) {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(settings)

    );

  },

  reset() {

    localStorage.removeItem(

      STORAGE_KEY

    );

  },

  getDefaults() {

    return {

      ...DEFAULT_SETTINGS,

    };

  },

};

export default PresentationStorage;
