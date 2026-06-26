import { useState } from "react";

import PresentationManager from "../../core/presentation/PresentationManager";

export default function useSlides() {

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const slides =
    PresentationManager.getSlides();

  function next() {

    setCurrentSlide(previous =>

      PresentationManager.next(

        previous

      )

    );

  }

  function previous() {

    setCurrentSlide(previous =>

      PresentationManager.previous(

        previous

      )

    );

  }

  function jumpTo(index) {

    setCurrentSlide(

      PresentationManager.jumpTo(

        index

      )

    );

  }

  function restart() {

    setCurrentSlide(

      PresentationManager.restart()

    );

  }

  function finish() {

    setCurrentSlide(

      PresentationManager.finish()

    );

  }

  return {

    slides,

    currentSlide,

    current:

      PresentationManager.getSlide(

        currentSlide

      ),

    total:

      PresentationManager.getTotalSlides(),

    next,

    previous,

    jumpTo,

    restart,

    finish,

    isFirst:

      PresentationManager.isFirstSlide(

        currentSlide

      ),

    isLast:

      PresentationManager.isLastSlide(

        currentSlide

      ),

  };

}
