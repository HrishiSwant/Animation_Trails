import Themes from "./themes";

class ThemeRegistry {

  constructor() {

    this.themes = Themes;

  }

  getAll() {

    return Object.values(

      this.themes

    );

  }

  getIds() {

    return Object.keys(

      this.themes

    );

  }

  get(id) {

    return (

      this.themes[id] ||

      this.themes.dark

    );

  }

  has(id) {

    return Object.prototype.hasOwnProperty.call(

      this.themes,

      id,

    );

  }

  register(theme) {

    if (

      !theme ||

      !theme.id

    ) {

      return;

    }

    this.themes[theme.id] =

      theme;

  }

}

const registry =

  new ThemeRegistry();

export default registry;
