class DockRegistry {

  constructor() {

    this.panels = [];

  }

  /*
  ==========================
      REGISTER
  ==========================
  */

  register(panel) {

    if (

      !panel ||

      !panel.id

    ) {

      return;

    }

    const exists =

      this.panels.some(

        item =>

          item.id === panel.id,

      );

    if (exists) {

      return;

    }

    this.panels.push(panel);

  }

  /*
  ==========================
      UNREGISTER
  ==========================
  */

  unregister(id) {

    this.panels =

      this.panels.filter(

        item =>

          item.id !== id,

      );

  }

  /*
  ==========================
      GET
  ==========================
  */

  get(id) {

    return this.panels.find(

      item =>

        item.id === id,

    );

  }

  getAll() {

    return [

      ...this.panels,

    ];

  }

}

export default new DockRegistry();
