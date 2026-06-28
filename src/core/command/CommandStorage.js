const STORAGE_KEY =
  "hrishi-studio-recent-commands";

class CommandStorage {

  load() {

    try {

      return JSON.parse(

        localStorage.getItem(

          STORAGE_KEY,

        ) || "[]",

      );

    } catch {

      return [];

    }

  }

  save(commands) {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(commands),

    );

  }

  clear() {

    localStorage.removeItem(

      STORAGE_KEY,

    );

  }

}

const storage =
  new CommandStorage();

export default storage;
