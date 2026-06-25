const STORAGE_KEY =
  "hrishi-studio:favorite-commands";

export default class FavoriteCommandManager {

  static getFavorites() {

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

  static isFavorite(id) {

    return this.getFavorites().includes(id);

  }

  static toggle(id) {

    const favorites =
      this.getFavorites();

    const index =
      favorites.indexOf(id);

    if (index >= 0) {

      favorites.splice(

        index,

        1

      );

    } else {

      favorites.unshift(id);

    }

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(

        favorites

      )

    );

  }

  static clear() {

    localStorage.removeItem(

      STORAGE_KEY

    );

  }

}
