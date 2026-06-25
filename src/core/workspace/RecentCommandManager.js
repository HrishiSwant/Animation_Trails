const STORAGE_KEY =
  "hrishi-studio:recent-commands";

const MAX_RECENT = 5;

export default class RecentCommandManager {

  static getRecent() {

    try {

      const raw =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (!raw) {

        return [];

      }

      return JSON.parse(raw);

    } catch {

      return [];

    }

  }

  static add(command) {

    const recent =
      this.getRecent().filter(

        item =>

          item.id !== command.id

      );

    recent.unshift(command);

    if (

      recent.length >

      MAX_RECENT

    ) {

      recent.length =
        MAX_RECENT;

    }

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(recent)

    );

  }

  static clear() {

    localStorage.removeItem(

      STORAGE_KEY

    );

  }

}
