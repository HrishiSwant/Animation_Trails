export default function applyAccessibility(
  settings,
) {

  const root =
    document.documentElement;

  /*
  ==========================
      DATA ATTRIBUTES
  ==========================
  */

  root.setAttribute(

    "data-high-contrast",

    settings.highContrast
      ? "on"
      : "off",

  );

  root.setAttribute(

    "data-reduce-motion",

    settings.reduceMotion
      ? "on"
      : "off",

  );

  root.setAttribute(

    "data-large-targets",

    settings.largeClickTargets
      ? "on"
      : "off",

  );

  root.setAttribute(

    "data-keyboard-nav",

    settings.keyboardNavigation
      ? "on"
      : "off",

  );

  root.setAttribute(

    "data-focus-indicators",

    settings.focusIndicators
      ? "on"
      : "off",

  );

  /*
  ==========================
      HIGH CONTRAST
  ==========================
  */

  root.style.setProperty(

    "--contrast-multiplier",

    settings.highContrast
      ? "1.25"
      : "1",

  );

  /*
  ==========================
      CLICK TARGETS
  ==========================
  */

  root.style.setProperty(

    "--click-target-size",

    settings.largeClickTargets
      ? "52px"
      : "44px",

  );

  /*
  ==========================
      FOCUS
  ==========================
  */

  root.style.setProperty(

    "--focus-ring-width",

    settings.focusIndicators
      ? "3px"
      : "0px",

  );

  root.style.setProperty(

    "--focus-ring-offset",

    settings.focusIndicators
      ? "3px"
      : "0px",

  );

  root.style.setProperty(

    "--focus-ring-color",

    "var(--color-primary)",

  );

}
