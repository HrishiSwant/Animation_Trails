class DockDragManager {

  constructor() {

    this.dragging = false;

    this.panel = null;

    this.position = {

      x: 0,

      y: 0,

    };

    this.listeners = [];

  }

  /*
  ==========================
      START
  ==========================
  */

  start(

    panel,

    x,

    y,

  ) {

    this.dragging = true;

    this.panel = panel;

    this.position = {

      x,

      y,

    };

    this.notify();

  }

  /*
  ==========================
      MOVE
  ==========================
  */

  move(

    x,

    y,

  ) {

    if (

      !this.dragging

    ) {

      return;

    }

    this.position = {

      x,

      y,

    };

    this.notify();

  }

  /*
  ==========================
      END
  ==========================
  */

  end() {

    this.dragging = false;

    this.panel = null;

    this.notify();

  }

  /*
  ==========================
      GET STATE
  ==========================
  */

  getState() {

    return {

      dragging:

        this.dragging,

      panel:

        this.panel,

      position:

        this.position,

    };

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

    const state =

      this.getState();

    this.listeners.forEach(

      listener =>

        listener(

          state,

        ),

    );

  }

}

export default new DockDragManager();
