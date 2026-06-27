const STORAGE_KEY =

  "hrishi-studio-theme";

class ThemeStorage {

  load() {

    try {

      return (

        localStorage.getItem(

          STORAGE_KEY

        ) ||

        "dark"

      );

    }

    catch {

      return "dark";

    }

  }

  save(themeId) {

    try {

      localStorage.setItem(

        STORAGE_KEY,

        themeId,

      );

    }

    catch {

      // Ignore storage errors

    }

  }

  clear() {

    try {

      localStorage.removeItem(

        STORAGE_KEY,

      );

    }

    catch {

      // Ignore storage errors

    }

  }

}

const storage =

  new ThemeStorage();

export default storage;
