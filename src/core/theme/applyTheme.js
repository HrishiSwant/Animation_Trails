export default function applyTheme(theme) {

  if (

    !theme ||

    !theme.colors

  ) {

    return;

  }

  const root =

    document.documentElement;

  Object.entries(

    theme.colors,

  ).forEach(

    ([

      key,

      value,

    ]) => {

      root.style.setProperty(

        `--color-${key}`,

        value,

      );

    },

  );

  root.setAttribute(

    "data-theme",

    theme.id,

  );

}
