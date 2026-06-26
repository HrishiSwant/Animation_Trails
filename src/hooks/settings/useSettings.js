import { useState } from "react";

import SettingsManager from "../../core/settings/SettingsManager";

export default function useSettings() {

  /*
  ==========================
      SETTINGS STATE
  ==========================
  */

  const [

    settings,

    setSettings,

  ] = useState(

    SettingsManager.getSettings()

  );

  /*
  ==========================
      REFRESH
  ==========================
  */

  function refresh() {

    setSettings(

      SettingsManager.getSettings()

    );

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  function save(updatedSettings) {

    SettingsManager.saveSettings(

      updatedSettings

    );

    refresh();

  }

  /*
  ==========================
      UPDATE SECTION
  ==========================
  */

  function updateSection(

    section,

    values,

  ) {

    const updated =

      SettingsManager.updateSection(

        section,

        values,

      );

    setSettings(updated);

  }

  /*
  ==========================
      UPDATE VALUE
  ==========================
  */

  function updateValue(

    section,

    key,

    value,

  ) {

    const updated =

      SettingsManager.updateValue(

        section,

        key,

        value,

      );

    setSettings(updated);

  }

  /*
  ==========================
      RESET
  ==========================
  */

  function reset() {

    const updated =

      SettingsManager.resetSettings();

    setSettings(updated);

  }

  /*
  ==========================
      EXPORT
  ==========================
  */

  function exportSettings() {

    return SettingsManager.exportSettings();

  }

  /*
  ==========================
      IMPORT
  ==========================
  */

  function importSettings(json) {

    const updated =

      SettingsManager.importSettings(

        json

      );

    setSettings(updated);

  }

  return {

    settings,

    refresh,

    save,

    updateSection,

    updateValue,

    reset,

    exportSettings,

    importSettings,

  };

}
