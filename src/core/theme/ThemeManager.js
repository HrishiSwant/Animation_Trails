import ThemeRegistry from "./ThemeRegistry";
import ThemeStorage from "./ThemeStorage";
import applyTheme from "./applyTheme";

class ThemeManager {

  constructor() {

    this.listeners = [];

    this.currentTheme =

      ThemeRegistry.get(

        ThemeStorage.load(),

      );

    applyTheme(

      this.currentTheme,

    );

  }

  getTheme() {

    return this.currentTheme;

  }

  getThemeId() {

    return this.currentTheme.id;

  }

  setTheme(themeId) {

    const theme =

      ThemeRegistry.get(

        themeId,

      );

    this.currentTheme =

      theme;

    ThemeStorage.save(

      theme.id,

    );

    applyTheme(

      theme,

    );

    this.notify();

    return theme;

  }

  reset() {

    ThemeStorage.clear();

    this.currentTheme =

      ThemeRegistry.get(

        "dark",

      );

    applyTheme(

      this.currentTheme,

    );

    this.notify();

    return this.currentTheme;

  }

  getThemes() {

    return ThemeRegistry.getAll();

  }

  hasTheme(themeId) {

    return ThemeRegistry.has(

      themeId,

    );

  }

  subscribe(listener) {

    this.listeners.push(

      listener,

    );

    return () => {

      this.listeners =

        this.listeners.filter(

          (item) =>

            item !== listener,

        );

    };

  }

  notify() {

    this.listeners.forEach(

      (listener) =>

        listener(

          this.currentTheme,

        ),

    );

  }

}

const manager =

  new ThemeManager();

export default manager;
