export default function applyCompact(
  enabled,
) {

  const root =
    document.documentElement;

  root.setAttribute(

    "data-compact",

    enabled
      ? "on"
      : "off",

  );

  if (enabled) {

    /*
    ==========================
        SPACING
    ==========================
    */

    root.style.setProperty(
      "--spacing-xs",
      "4px",
    );

    root.style.setProperty(
      "--spacing-sm",
      "8px",
    );

    root.style.setProperty(
      "--spacing-md",
      "12px",
    );

    root.style.setProperty(
      "--spacing-lg",
      "16px",
    );

    root.style.setProperty(
      "--spacing-xl",
      "20px",
    );

    /*
    ==========================
        PADDING
    ==========================
    */

    root.style.setProperty(
      "--card-padding",
      "14px",
    );

    root.style.setProperty(
      "--section-padding",
      "18px",
    );

    /*
    ==========================
        RADIUS
    ==========================
    */

    root.style.setProperty(
      "--radius-small",
      "8px",
    );

    root.style.setProperty(
      "--radius-medium",
      "12px",
    );

    root.style.setProperty(
      "--radius-large",
      "16px",
    );

    /*
    ==========================
        CONTROLS
    ==========================
    */

    root.style.setProperty(
      "--control-height",
      "40px",
    );

  } else {

    /*
    ==========================
        SPACING
    ==========================
    */

    root.style.setProperty(
      "--spacing-xs",
      "6px",
    );

    root.style.setProperty(
      "--spacing-sm",
      "12px",
    );

    root.style.setProperty(
      "--spacing-md",
      "18px",
    );

    root.style.setProperty(
      "--spacing-lg",
      "24px",
    );

    root.style.setProperty(
      "--spacing-xl",
      "32px",
    );

    /*
    ==========================
        PADDING
    ==========================
    */

    root.style.setProperty(
      "--card-padding",
      "20px",
    );

    root.style.setProperty(
      "--section-padding",
      "28px",
    );

    /*
    ==========================
        RADIUS
    ==========================
    */

    root.style.setProperty(
      "--radius-small",
      "10px",
    );

    root.style.setProperty(
      "--radius-medium",
      "14px",
    );

    root.style.setProperty(
      "--radius-large",
      "20px",
    );

    /*
    ==========================
        CONTROLS
    ==========================
    */

    root.style.setProperty(
      "--control-height",
      "48px",
    );

  }

}
