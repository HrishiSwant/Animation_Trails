const KEY = "hrishi-dock-layout";

class DockStorage {

  /*
  ==========================
      LOAD
  ==========================
  */

  load() {

    try {

      const value =

        localStorage.getItem(

          KEY,

        );

      return value

        ? JSON.parse(

            value,

          )

        : null;

    } catch {

      return null;

    }

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  save(layout) {

    localStorage.setItem(

      KEY,

      JSON.stringify(

        layout,

      ),

    );

  }

  /*
  ==========================
      CLEAR
  ==========================
  */

  clear() {

    localStorage.removeItem(

      KEY,

    );

  }

}

export default new DockStorage();
