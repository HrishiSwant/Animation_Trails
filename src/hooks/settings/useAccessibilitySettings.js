import useSettings from "./useSettings";

export default function useAccessibilitySettings() {

  const settings =
    useSettings();

  const accessibility =
    settings.settings.accessibility;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "accessibility",

      key,

      value,

    );

  }

  function setReduceMotion(value) {

    update(

      "reduceMotion",

      value,

    );

  }

  function setLargeText(value) {

    update(

      "largeText",

      value,

    );

  }

  function setShowFocus(value) {

    update(

      "showFocus",

      value,

    );

  }

  function setContrast(value) {

    update(

      "contrast",

      value,

    );

  }

  return {

    accessibility,

    reduceMotion:
      accessibility.reduceMotion,

    largeText:
      accessibility.largeText,

    showFocus:
      accessibility.showFocus,

    contrast:
      accessibility.contrast,

    update,

    setReduceMotion,

    setLargeText,

    setShowFocus,

    setContrast,

  };

}
