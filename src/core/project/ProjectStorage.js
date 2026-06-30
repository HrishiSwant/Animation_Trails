const KEY = "hrishi-projects";

class ProjectStorage {

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

    catch (

      error

    ) {

      console.error(

        "Failed to load projects.",

        error,

      );

      return null;

    }

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  save(

    state,

  ) {

    try {

      localStorage.setItem(

        KEY,

        JSON.stringify(

          state,

        ),

      );

    }

    catch (

      error

    ) {

      console.error(

        "Failed to save projects.",

        error,

      );

    }

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

export default new ProjectStorage();
