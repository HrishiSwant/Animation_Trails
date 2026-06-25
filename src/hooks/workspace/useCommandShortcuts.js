import { useEffect } from "react";

export default function useCommandShortcuts({

  visible,

  commands,

  execute,

  onClose,

  selectedIndex,

  setSelectedIndex,

  setVisible,

}) {

  useEffect(() => {

    function handleKeyDown(event) {

      /*
      -------------------------
      Ctrl + Shift + P
      -------------------------
      */

      if (

        event.ctrlKey &&

        event.shiftKey &&

        event.key.toLowerCase() === "p"

      ) {

        event.preventDefault();

        setVisible(previous => !previous);

        return;

      }

      if (!visible) {

        return;

      }

      /*
      -------------------------
      Escape
      -------------------------
      */

      if (event.key === "Escape") {

        event.preventDefault();

        onClose();

        return;

      }

      /*
      -------------------------
      Arrow Down
      -------------------------
      */

      if (event.key === "ArrowDown") {

        event.preventDefault();

        setSelectedIndex(previous =>

          Math.min(

            previous + 1,

            commands.length - 1

          )

        );

      }

      /*
      -------------------------
      Arrow Up
      -------------------------
      */

      if (event.key === "ArrowUp") {

        event.preventDefault();

        setSelectedIndex(previous =>

          Math.max(

            previous - 1,

            0

          )

        );

      }

      /*
      -------------------------
      Enter
      -------------------------
      */

      if (

        event.key === "Enter" &&

        commands[selectedIndex]

      ) {

        event.preventDefault();

        execute(

          commands[selectedIndex]

        );

      }

    }

    window.addEventListener(

      "keydown",

      handleKeyDown

    );

    return () =>

      window.removeEventListener(

        "keydown",

        handleKeyDown

      );

  }, [

    visible,

    commands,

    execute,

    onClose,

    selectedIndex,

    setSelectedIndex,

    setVisible,

  ]);

}
