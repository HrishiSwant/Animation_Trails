const KEY = "hrishi-dock-layout";

class DockStorage {

  load() {

    try {

      const value =

        localStorage.getItem(KEY);

      return value

        ? JSON.parse(value)

        : null;

    }

    catch {

      return null;

    }

  }

  save(layout) {

    localStorage.setItem(

      KEY,

      JSON.stringify(layout),

    );

  }

}

clear() {

  localStorage.removeItem(

    "hrishi-dock-layout",

  );

}

export default new DockStorage();
