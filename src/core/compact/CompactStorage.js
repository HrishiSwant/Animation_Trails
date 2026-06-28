const STORAGE_KEY = "hrishi-studio-compact";

class CompactStorage {

  load() {

    const value = localStorage.getItem(
      STORAGE_KEY
    );

    if (value === null) {

      return false;

    }

    return value === "true";

  }

  save(enabled) {

    localStorage.setItem(
      STORAGE_KEY,
      String(enabled)
    );

  }

  clear() {

    localStorage.removeItem(
      STORAGE_KEY
    );

  }

}

const storage =
  new CompactStorage();

export default storage;
