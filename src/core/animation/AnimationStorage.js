const STORAGE_KEY = "hrishi-studio-animations";

class AnimationStorage {

  load() {

    const value = localStorage.getItem(
      STORAGE_KEY
    );

    if (value === null) {

      return true;

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
  new AnimationStorage();

export default storage;
