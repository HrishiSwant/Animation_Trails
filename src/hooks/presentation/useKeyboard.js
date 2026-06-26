import { useEffect } from "react";

export default function useKeyboard({

  enabled = true,

  next,

  previous,

  restart,

  finish,

  jumpTo,

  total,

  toggleFullscreen,

}) {

  useEffect(() => {

    if (!enabled) {

      return;

    }

    function handleKeyDown(event) {

      switch (event.key) {

        case "ArrowRight":

          event.preventDefault();

          next();

          break;

        case "ArrowLeft":

          event.preventDefault();

          previous();

          break;

        case " ":

        case "Spacebar":

          event.preventDefault();

          next();

          break;

        case "Home":

          event.preventDefault();

          restart();

          break;

        case "End":

          event.preventDefault();

          jumpTo(total - 1);

          break;

        case "Escape":

          event.preventDefault();

          finish();

          break;

        case "f":

        case "F":

          event.preventDefault();

          toggleFullscreen();

          break;

        default:

          break;

      }

    }

    window.addEventListener(

      "keydown",

      handleKeyDown

    );

    return () => {

      window.removeEventListener(

        "keydown",

        handleKeyDown

      );

    };

  }, [

    enabled,

    next,

    previous,

    restart,

    finish,

    jumpTo,

    total,

    toggleFullscreen,

  ]);

}
