export default function applyAccessibility(
  settings,
) {

  const root =
    document.documentElement;

  /*
  ==========================
      HIGH CONTRAST
  ==========================
  */

  root.setAttribute(

    "data-high-contrast",

    settings.highContrast
      ? "on"
      : "off",

  );

  /*
  ==========================
      REDUCE MOTION
  ==========================
  */

  root.setAttribute(

    "data-reduce-motion",

    settings.reduceMotion
      ? "on"
      : "off",

  );

  /*
  ==========================
      LARGE TARGETS
  ==========================
  */

  root.setAttribute(

    "data-large-targets",

    settings.largeClickTargets
      ? "on"
      : "off",

  );

  /*
  ==========================
      KEYBOARD
  ==========================
  */

  root.setAttribute(

    "data-keyboard-nav",

    settings.keyboardNavigation
      ? "on"
      : "off",

  );

  /*
  ==========================
      FOCUS
  ==========================
  */

  root.setAttribute(

    "data-focus-indicators",

    settings.focusIndicators
      ? "on"
      : "off",

  );

}
