import { useEffect, useState } from "react";

const STORAGE_KEY = "dashboard-preferences";

const DEFAULTS = {

  density: "comfortable",

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

      const saved =

        localStorage.getItem(

          STORAGE_KEY,

        );

      return saved

        ? JSON.parse(saved)

        : DEFAULTS;

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

  function setDensity(value) {

    setPreferences(previous => ({

      ...previous,

      density: value,

    }));

  }

  return {

    preferences,

    toggleWidget,

    setDensity,

  };

}
