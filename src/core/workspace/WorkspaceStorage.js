const KEY = "hrishi-workspace";

class WorkspaceStorage {

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

    }

    catch {

      return null;

    }

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  save(state) {

    localStorage.setItem(

      KEY,

      JSON.stringify(

        state,

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

export default new WorkspaceStorage();
