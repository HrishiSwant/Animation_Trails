export default function applyAnimations(
  enabled
) {

  const root =
    document.documentElement;

  root.setAttribute(

    "data-animations",

    enabled
      ? "on"
      : "off"

  );

}
