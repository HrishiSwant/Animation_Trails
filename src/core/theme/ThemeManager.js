import ThemeRegistry from "./ThemeRegistry";
import ThemeStorage from "./ThemeStorage";

class ThemeManager {

  constructor() {

    this.currentTheme =

      ThemeRegistry.get(

        ThemeStorage.load(),

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

    return theme;

  }

  reset() {

    ThemeStorage.clear();

    this.currentTheme =

      ThemeRegistry.get(

        "dark",

      );

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

}

const manager =

  new ThemeManager();

export default manager;
