export default function applyAccent(color) {

  if (!color) {

    return;

  }

  document.documentElement.style.setProperty(

    "--color-primary",

    color

  );

}
