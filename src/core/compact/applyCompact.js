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

}
