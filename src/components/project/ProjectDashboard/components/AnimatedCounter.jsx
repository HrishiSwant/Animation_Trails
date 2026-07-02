import {
  useEffect,
  useState,
} from "react";

export default function AnimatedCounter({

  value,

  duration = 600,

}) {

  const [

    display,

    setDisplay,

  ] = useState(0);

  useEffect(() => {

    const target =

      Number(value);

    if (

      Number.isNaN(target)

    ) {

      setDisplay(value);

      return;

    }

    let start = 0;

    const step = Math.max(

      1,

      Math.ceil(

        target / 30,

      ),

    );

    const interval =

      duration / (

        target / step || 1

      );

    const timer =

      setInterval(() => {

        start += step;

        if (

          start >= target

        ) {

          setDisplay(

            target,

          );

          clearInterval(

            timer,

          );

          return;

        }

        setDisplay(

          start,

        );

      }, interval);

    return () =>

      clearInterval(

        timer,

      );

  }, [

    value,

    duration,

  ]);

  return display;

}
