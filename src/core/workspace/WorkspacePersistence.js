import defaultWorkspaceState from "./defaultWorkspaceState";
import WorkspaceStorage from "./WorkspaceStorage";

class WorkspacePersistence {

  constructor() {

    this.state =

      structuredClone(

        defaultWorkspaceState,

      );

    this.listeners = [];

  }

  /*
  ==========================
      INITIALIZE
  ==========================
  */

  initialize() {

    const saved =

      WorkspaceStorage.load();

    if (saved) {

      this.state = {

        ...defaultWorkspaceState,

        ...saved,

        session: {

          ...defaultWorkspaceState.session,

          ...saved.session,

        },

      };

    }

    else {

      WorkspaceStorage.save(

        this.state,

      );

    }

  }

  /*
  ==========================
      GET STATE
  ==========================
  */

  getState() {

    return this.state;

  }

  /*
  ==========================
      UPDATE
  ==========================
  */

  update(values) {

    this.state = {

      ...this.state,

      ...values,

      session: {

        ...this.state.session,

        lastOpened:

          Date.now(),

      },

    };

    WorkspaceStorage.save(

      this.state,

    );

    this.notify();

  }


  /*
==========================
    CURRENT TOOL
==========================
*/

setCurrentTool(

  currentTool,

) {

  this.update({

    currentTool,

  });

}

getCurrentTool() {

  return

    this.state.currentTool;

}

  /*
==========================
    PRESENTATION
==========================
*/

setPresentation(

  presentation,

) {

  this.update({

    presentation,

  });

}

getPresentation() {

  return this.state.presentation;

}

  /*
  ==========================
      RESET
  ==========================
  */

  reset() {

    this.state =

      structuredClone(

        defaultWorkspaceState,

      );

    WorkspaceStorage.save(

      this.state,

    );

    this.notify();

  }

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  subscribe(listener) {

    this.listeners.push(

      listener,

    );

    return () => {

      this.listeners =

        this.listeners.filter(

          item =>

            item !== listener,

        );

    };

  }

  /*
  ==========================
      NOTIFY
  ==========================
  */

  notify() {

    this.listeners.forEach(

      listener =>

        listener(

          this.state,

        ),

    );

  }

}

export default new WorkspacePersistence();
