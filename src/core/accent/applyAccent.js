export default function applyAccent(color) {

  if (!color) {

    return;

  }

  const root =

    document.documentElement;

  root.style.setProperty(

    "--color-primary",

    color

  );

}
