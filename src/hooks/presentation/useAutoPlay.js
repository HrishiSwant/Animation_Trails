import { useCallback, useEffect, useRef, useState } from "react";

export default function useAutoPlay({

  next,

  initialInterval = 5000,

}) {

  const timer =
    useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [interval, setIntervalTime] =
    useState(initialInterval);

  const stop =
    useCallback(() => {

      if (timer.current) {

        clearInterval(timer.current);

        timer.current = null;

      }

      setIsPlaying(false);

    }, []);

  const start =
    useCallback(() => {

      setIsPlaying(true);

    }, []);

  const pause =
    useCallback(() => {

      stop();

    }, [stop]);

  const resume =
    useCallback(() => {

      start();

    }, [start]);

  const toggle =
    useCallback(() => {

      setIsPlaying(previous =>

        !previous

      );

    }, []);

  const setSpeed =
    useCallback((milliseconds) => {

      setIntervalTime(

        milliseconds

      );

    }, []);

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

      if (timer.current) {

        clearInterval(

          timer.current

        );

      }

    };

  }, [

    isPlaying,

    interval,

    next,

  ]);

  return {

    isPlaying,

    interval,

    start,

    stop,

    pause,

    resume,

    toggle,

    setSpeed,

  };

}
