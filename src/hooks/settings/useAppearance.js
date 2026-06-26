import useSettings from "./useSettings";

export default function useAppearance() {

  /*
  ==========================
      SETTINGS
  ==========================
  */

  const settings =
    useSettings();

  const appearance =
    settings.settings.appearance;

  /*
  ==========================
      UPDATE
  ==========================
  */

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "appearance",

      key,

      value,

    );

  }

  /*
  ==========================
      HELPERS
  ==========================
  */

  function setTheme(theme) {

    update(

      "theme",

      theme,

    );

  }

  function setAccent(accent) {

    update(

      "accent",

      accent,

    );

  }

  function setFontSize(size) {

    update(

      "fontSize",

      size,

    );

  }

  function setAnimations(enabled) {

    update(

      "animations",

      enabled,

    );

  }

  function setCompactMode(enabled) {

    update(

      "compactMode",

      enabled,

    );

  }

  return {

    appearance,

    theme:
      appearance.theme,

    accent:
      appearance.accent,

    fontSize:
      appearance.fontSize,

    animations:
      appearance.animations,

    compactMode:
      appearance.compactMode,

    update,

    setTheme,

    setAccent,

    setFontSize,

    setAnimations,

    setCompactMode,

  };

}
