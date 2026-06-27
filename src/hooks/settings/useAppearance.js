import { useEffect } from "react";

import useSettings from "./useSettings";

import ThemeManager from "../../core/theme/ThemeManager";
import AccentManager from "../../core/accent/AccentManager";
import FontManager from "../../core/font/FontManager";

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
      SYNC THEME
  ==========================
  */

  useEffect(() => {

    ThemeManager.setTheme(

      appearance.theme

    );

  }, [

    appearance.theme,

  ]);

  /*
  ==========================
      SYNC ACCENT
  ==========================
  */

  useEffect(() => {

    AccentManager.setAccent(

      appearance.accent

    );

  }, [

    appearance.accent,

  ]);

  /*
  ==========================
      SYNC FONT SIZE
  ==========================
  */

  useEffect(() => {

    FontManager.setFontSize(

      appearance.fontSize

    );

  }, [

    appearance.fontSize,

  ]);

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
