import PresentationSlides from "./PresentationSlides";

const PresentationManager = {

  getSlides() {

    return PresentationSlides;

  },

  getTotalSlides() {

    return PresentationSlides.length;

  },

  getSlide(index) {

    return PresentationSlides[index] ?? null;

  },

  next(currentIndex) {

    return Math.min(

      currentIndex + 1,

      PresentationSlides.length - 1

    );

  },

  previous(currentIndex) {

    return Math.max(

      currentIndex - 1,

      0

    );

  },

  jumpTo(index) {

    if (

      index < 0 ||

      index >= PresentationSlides.length

    ) {

      return 0;

    }

    return index;

  },

  restart() {

    return 0;

  },

  finish() {

    return -1;

  },

  isFirstSlide(index) {

    return index === 0;

  },

  isLastSlide(index) {

    return (

      index ===

      PresentationSlides.length - 1

    );

  },

};

export default PresentationManager;
