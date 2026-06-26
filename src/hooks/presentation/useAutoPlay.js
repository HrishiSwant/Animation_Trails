import { useEffect, useRef, useState } from "react";

export default function useAutoPlay({

  enabled = false,

  interval = 5000,

  next,

}) {

  const timer =
    useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(enabled);

  useEffect(() => {

    if (!isPlaying) {

      return;

    }

    timer.current = setInterval(

      () => {

        next();

      },

      interval

    );

    return () => {

      clearInterval(

        timer.current

      );

    };

  }, [

    isPlaying,

    interval,

    next,

  ]);

  function start() {

    setIsPlaying(true);

  }

  function pause() {

    setIsPlaying(false);

  }

  function resume() {

    setIsPlaying(true);

  }

  function stop() {

    clearInterval(

      timer.current

    );

    setIsPlaying(false);

  }

  function toggle() {

    setIsPlaying(

      previous =>

        !previous

    );

  }

  function setSpeed(ms) {

    stop();

    setTimeout(() => {

      setIsPlaying(true);

    }, 0);

    return ms;

  }

  return {

    isPlaying,

    interval,

    start,

    pause,

    resume,

    stop,

    toggle,

    setSpeed,

  };

}
