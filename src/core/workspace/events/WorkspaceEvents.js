class WorkspaceEvents {

  constructor() {

    this.listeners = new Map();

  }

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  on(

    event,

    callback,

  ) {

    if (

      !this.listeners.has(

        event,

      )

    ) {

      this.listeners.set(

        event,

        [],

      );

    }

    this.listeners

      .get(event)

      .push(callback);

    return () =>

      this.off(

        event,

        callback,

      );

  }

  /*
  ==========================
      UNSUBSCRIBE
  ==========================
  */

  off(

    event,

    callback,

  ) {

    if (

      !this.listeners.has(

        event,

      )

    ) {

      return;

    }

    this.listeners.set(

      event,

      this.listeners

        .get(event)

        .filter(

          item =>

            item !== callback,

        ),

    );

  }

  /*
  ==========================
      EMIT
  ==========================
  */

  emit(

    event,

    payload,

  ) {

    if (

      !this.listeners.has(

        event,

      )

    ) {

      return;

    }

    this.listeners

      .get(event)

      .forEach(

        listener =>

          listener(

            payload,

          ),

      );

  }

  /*
  ==========================
      CLEAR
  ==========================
  */

  clear() {

    this.listeners.clear();

  }

}

export default new WorkspaceEvents();
