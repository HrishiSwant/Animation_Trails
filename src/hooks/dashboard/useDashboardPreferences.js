import { useEffect, useState } from "react";

const STORAGE_KEY = "dashboard-preferences";

const DEFAULTS = {

  density: "comfortable",

  favoriteWidgets: [],

  widgets: {

    overview: true,

    health: true,

    insights: true,

    favorites: true,

    recent: true,

    continueWorking: true,

    todaysActivity: true,

    productivity: true,

    weekly: true,

    streak: true,

    summary: true,

    recommendations: true,

  },

};

export default function useDashboardPreferences() {

  const [preferences, setPreferences] =

    useState(() => {

      try {

        const saved =

          localStorage.getItem(

            STORAGE_KEY,

          );

        if (!saved) {

          return DEFAULTS;

        }

        const parsed =

          JSON.parse(saved);

        return {

          ...DEFAULTS,

          ...parsed,

          favoriteWidgets:

            parsed.favoriteWidgets || [],

          widgets: {

            ...DEFAULTS.widgets,

            ...(parsed.widgets || {}),

          },

        };

      }

      catch {

        return DEFAULTS;

      }

    });

  useEffect(() => {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(preferences),

    );

  }, [preferences]);

  function toggleWidget(id) {

    setPreferences(previous => ({

      ...previous,

      widgets: {

        ...previous.widgets,

        [id]:

          !previous.widgets[id],

      },

    }));

  }

  function toggleFavoriteWidget(id) {

    setPreferences(previous => {

      const favorites =

        previous.favoriteWidgets || [];

      const exists =

        favorites.includes(id);

      return {

        ...previous,

        favoriteWidgets: exists

          ? favorites.filter(

              item => item !== id,

            )

          : [

              ...favorites,

              id,

            ],

      };

    });

  }

  function setDensity(value) {

    setPreferences(previous => ({

      ...previous,

      density: value,

    }));

  }

  return {

    preferences,

    toggleWidget,

    toggleFavoriteWidget,

    setDensity,

  };

}
