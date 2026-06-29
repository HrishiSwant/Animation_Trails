class DockAnimator {

  constructor() {

    this.duration = 220;

  }

  getDuration() {

    return this.duration;

  }

  animate(callback) {

    requestAnimationFrame(() => {

      callback();

    });

  }

}

export default new DockAnimator();
