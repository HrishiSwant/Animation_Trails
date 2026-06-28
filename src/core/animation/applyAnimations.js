export default function applyAnimations(
  enabled,
) {

  const root =
    document.documentElement;

  root.setAttribute(

    "data-animations",

    enabled
      ? "on"
      : "off",

  );

  if (enabled) {

    root.style.setProperty(

      "--transition-fast",

      ".18s",

    );

    root.style.setProperty(

      "--transition-medium",

      ".30s",

    );

    root.style.setProperty(

      "--transition-slow",

      ".45s",

    );

    root.style.setProperty(

      "--hover-transform",

      "translateY(-2px)",

    );

    root.style.setProperty(

      "--hover-scale",

      "scale(1.05)",

    );

  } else {

    root.style.setProperty(

      "--transition-fast",

      "0s",

    );

    root.style.setProperty(

      "--transition-medium",

      "0s",

    );

    root.style.setProperty(

      "--transition-slow",

      "0s",

    );

    root.style.setProperty(

      "--hover-transform",

      "none",

    );

    root.style.setProperty(

      "--hover-scale",

      "none",

    );

  }

}
