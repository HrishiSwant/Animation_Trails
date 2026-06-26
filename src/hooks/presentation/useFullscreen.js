import { useEffect, useState } from "react";

export default function useFullscreen() {

  const [isFullscreen, setIsFullscreen] =
    useState(

      !!document.fullscreenElement

    );

  useEffect(() => {

    function handleChange() {

      setIsFullscreen(

        !!document.fullscreenElement

      );

    }

    document.addEventListener(

      "fullscreenchange",

      handleChange

    );

    return () => {

      document.removeEventListener(

        "fullscreenchange",

        handleChange

      );

    };

  }, []);

  async function enter() {

    if (

      !document.fullscreenElement

    ) {

      await document.documentElement.requestFullscreen();

    }

  }

  async function exit() {

    if (

      document.fullscreenElement

    ) {

      await document.exitFullscreen();

    }

  }

  async function toggle() {

    if (

      document.fullscreenElement

    ) {

      await exit();

    } else {

      await enter();

    }

  }

  return {

    isFullscreen,

    enter,

    exit,

    toggle,

  };

}
