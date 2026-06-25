import { useState } from "react";

export default function useGallery() {

  const [currentIndex, setCurrentIndex] =
    useState(-1);

  function open(index) {

    setCurrentIndex(index);

  }

  function close() {

    setCurrentIndex(-1);

  }

  function navigate(index) {

    setCurrentIndex(index);

  }

  function next(total) {

    setCurrentIndex(previous =>

      Math.min(

        previous + 1,

        total - 1

      )

    );

  }

  function previous() {

    setCurrentIndex(previous =>

      Math.max(

        previous - 1,

        0

      )

    );

  }

  return {

    currentIndex,

    open,

    close,

    navigate,

    next,

    previous,

  };

}
