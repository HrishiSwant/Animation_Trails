import { useEffect, useState } from "react";

export default function useCommandPalette() {

  const [

    open,

    setOpen,

  ] = useState(false);

  useEffect(() => {

    function handleKeyDown(event) {

      const key =
        event.key.toLowerCase();

      /*
      ==========================
          CTRL + K
      ==========================
      */

      if (

        event.ctrlKey &&

        key === "k"

      ) {

        event.preventDefault();

        setOpen(

          value => !value

        );

      }

      /*
      ==========================
          CTRL + SHIFT + P
      ==========================
      */

      if (

        event.ctrlKey &&

        event.shiftKey &&

        key === "p"

      ) {

        event.preventDefault();

        setOpen(

          value => !value

        );

      }

      /*
      ==========================
          ESC
      ==========================
      */

      if (

        key === "escape"

      ) {

        setOpen(false);

      }

    }

    window.addEventListener(

      "keydown",

      handleKeyDown,

    );

    return () =>

      window.removeEventListener(

        "keydown",

        handleKeyDown,

      );

  }, []);

  return {

    open,

    openPalette() {

      setOpen(true);

    },

    closePalette() {

      setOpen(false);

    },

    togglePalette() {

      setOpen(

        value => !value

      );

    },

  };

}
