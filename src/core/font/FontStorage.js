const STORAGE_KEY = "hrishi-studio-font-size";

class FontStorage {

  load() {

    return localStorage.getItem(

      STORAGE_KEY

    );

  }

  save(size) {

    localStorage.setItem(

      STORAGE_KEY,

      size

    );

  }

  clear() {

    localStorage.removeItem(

      STORAGE_KEY

    );

  }

}

export default new FontStorage();
