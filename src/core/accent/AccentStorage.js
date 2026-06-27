const STORAGE_KEY = "hrishi-studio-accent";

class AccentStorage {

  load() {

    return localStorage.getItem(STORAGE_KEY);

  }

  save(color) {

    localStorage.setItem(STORAGE_KEY, color);

  }

  clear() {

    localStorage.removeItem(STORAGE_KEY);

  }

}

export default new AccentStorage();
