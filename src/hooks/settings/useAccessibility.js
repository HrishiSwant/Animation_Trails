import { useEffect } from "react";

import useSettings from "./useSettings";

import AccessibilityManager from "../../core/accessibility/AccessibilityManager";

export default function useAccessibility() {

  /*
  ==========================
      SETTINGS
  ==========================
  */

  const settings =
    useSettings();

  const accessibility =
    settings.settings.accessibility;

  /*
  ==========================
      SYNC ENGINE
  ==========================
  */

  useEffect(() => {

    const managerSettings =
      AccessibilityManager.getSettings();

    if (

      JSON.stringify(managerSettings) !==

      JSON.stringify(accessibility)

    ) {

      Object.entries(

        accessibility,

      ).forEach(

        ([key, value]) => {

          AccessibilityManager.set(

            key,

            value,

          );

        },

      );

    }

  }, [

    accessibility,

  ]);

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  useEffect(() => {

    const unsubscribe =

      AccessibilityManager.subscribe(

        values => {

          Object.entries(

            values,

          ).forEach(

            ([key, value]) => {

              if (

                accessibility[key] !==

                value

              ) {

                settings.updateValue(

                  "accessibility",

                  key,

                  value,

                );

              }

            },

          );

        },

      );

    return unsubscribe;

  }, [

    accessibility,

    settings,

  ]);

  /*
  ==========================
      UPDATE
  ==========================
  */

  function update(

    key,

    value,

  ) {

    AccessibilityManager.set(

      key,

      value,

    );

    settings.updateValue(

      "accessibility",

      key,

      value,

    );

  }

  return {

    accessibility,

    update,

    setHighContrast(

      value,

    ) {

      update(

        "highContrast",

        value,

      );

    },

    setReduceMotion(

      value,

    ) {

      update(

        "reduceMotion",

        value,

      );

    },

    setLargeClickTargets(

      value,

    ) {

      update(

        "largeClickTargets",

        value,

      );

    },

    setKeyboardNavigation(

      value,

    ) {

      update(

        "keyboardNavigation",

        value,

      );

    },

    setFocusIndicators(

      value,

    ) {

      update(

        "focusIndicators",

        value,

      );

    },

  };

}
