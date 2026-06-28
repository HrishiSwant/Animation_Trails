const KEY = "hrishi-layout";

class LayoutStorage {

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

export default new LayoutStorage();
