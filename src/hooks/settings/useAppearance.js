import { useEffect } from "react";

import useSettings from "./useSettings";

import ThemeManager from "../../core/theme/ThemeManager";
import AccentManager from "../../core/accent/AccentManager";
import FontManager from "../../core/font/FontManager";
import AnimationManager from "../../core/animation/AnimationManager";
import CompactManager from "../../core/compact/CompactManager";

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
      SYNC THEME
  ==========================
  */

  useEffect(() => {

    if (

      ThemeManager.getThemeId() !==

      appearance.theme

    ) {

      ThemeManager.setTheme(

        appearance.theme

      );

    }

  }, [

    appearance.theme,

  ]);

  /*
  ==========================
      SYNC ACCENT
  ==========================
  */

  useEffect(() => {

    if (

      AccentManager.getAccent() !==

      appearance.accent

    ) {

      AccentManager.setAccent(

        appearance.accent

      );

    }

  }, [

    appearance.accent,

  ]);

  /*
  ==========================
      SYNC FONT
  ==========================
  */

  useEffect(() => {

    if (

      FontManager.getFontSize() !==

      appearance.fontSize

    ) {

      FontManager.setFontSize(

        appearance.fontSize

      );

    }

  }, [

    appearance.fontSize,

  ]);

  /*
  ==========================
      SYNC ANIMATIONS
  ==========================
  */

  useEffect(() => {

    if (

      AnimationManager.isEnabled() !==

      appearance.animations

    ) {

      AnimationManager.setEnabled(

        appearance.animations

      );

    }

  }, [

    appearance.animations,

  ]);

  /*
==========================
    SYNC COMPACT MODE
==========================
*/

useEffect(() => {

  if (

    CompactManager.isEnabled() !==

    appearance.compactMode

  ) {

    CompactManager.setEnabled(

      appearance.compactMode

    );

  }

}, [

  appearance.compactMode,

]);

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  useEffect(() => {

    const unsubscribe =

      AnimationManager.subscribe(

        enabled => {

          if (

            enabled !==

            appearance.animations

          ) {

            update(

              "animations",

              enabled,

            );

          }

        }

      );

    return unsubscribe;

  }, [

    appearance.animations,

  ]);

  /*
==========================
    SUBSCRIBE
==========================
*/

useEffect(() => {

  const unsubscribe =

    CompactManager.subscribe(

      enabled => {

        if (

          enabled !==

          appearance.compactMode

        ) {

          update(

            "compactMode",

            enabled,

          );

        }

      }

    );

  return unsubscribe;

}, [

  appearance.compactMode,

]);

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

    AnimationManager.setEnabled(

      enabled,

    );

    update(

      "animations",

      enabled,

    );

  }

function setCompactMode(enabled) {

  CompactManager.setEnabled(

    enabled,

  );

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
