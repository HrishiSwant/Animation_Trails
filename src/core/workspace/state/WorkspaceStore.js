import defaultWorkspaceState from "./defaultWorkspaceState";

class WorkspaceStore {

  constructor() {

    this.state =

      structuredClone(

        defaultWorkspaceState,

      );

    this.listeners = [];

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
      SET STATE
  ==========================
  */

  setState(

    values,

  ) {

    this.state = {

      ...this.state,

      ...values,

    };

    this.notify();

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

export default new WorkspaceStore();
