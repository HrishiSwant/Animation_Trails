class SketchRegistry {

  constructor() {

    this.engine = null;

  }

  setEngine(engine) {

    this.engine = engine;

  }

  getEngine() {

    return this.engine;

  }

}

export default new SketchRegistry();
