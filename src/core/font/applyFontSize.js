const FONT_SCALES = {

  small: {

    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    "2xl": "26px",
    "3xl": "34px",
    "4xl": "44px",

  },

  medium: {

    xs: "13px",
    sm: "14px",
    md: "15px",
    lg: "18px",
    xl: "22px",
    "2xl": "30px",
    "3xl": "40px",
    "4xl": "50px",

  },

  large: {

    xs: "14px",
    sm: "15px",
    md: "17px",
    lg: "20px",
    xl: "24px",
    "2xl": "34px",
    "3xl": "44px",
    "4xl": "56px",

  },

};

export default function applyFontSize(size) {

  const scale =

    FONT_SCALES[size] ||

    FONT_SCALES.medium;

  const root =

    document.documentElement;

  Object.entries(scale).forEach(

    ([key, value]) => {

      root.style.setProperty(

        `--font-${key}`,

        value

      );

    }

  );

}
