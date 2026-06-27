import useSettings from "./useSettings";

export default function usePresentationSettings() {

  const settings =
    useSettings();

  const presentation =
    settings.settings.presentation;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "presentation",

      key,

      value,

    );

  }

  function setFullscreen(value) {

    update(

      "fullscreen",

      value,

    );

  }

  function setAutoPlay(value) {

    update(

      "autoPlay",

      value,

    );

  }

  function setInterval(value) {

    update(

      "interval",

      Number(value),

    );

  }

  function setTransition(value) {

    update(

      "transition",

      value,

    );

  }

  function setShowProgress(value) {

    update(

      "showProgress",

      value,

    );

  }

  return {

    presentation,

    fullscreen:
      presentation.fullscreen,

    autoPlay:
      presentation.autoPlay,

    interval:
      presentation.interval,

    transition:
      presentation.transition,

    showProgress:
      presentation.showProgress,

    update,

    setFullscreen,

    setAutoPlay,

    setInterval,

    setTransition,

    setShowProgress,

  };

}
