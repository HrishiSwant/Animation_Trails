import SettingsStorage from "./SettingsStorage";

class SettingsManager {

  /*
  ==========================
      GET SETTINGS
  ==========================
  */

  getSettings() {

    return SettingsStorage.load();

  }

  /*
  ==========================
      SAVE SETTINGS
  ==========================
  */

  saveSettings(settings) {

    SettingsStorage.save(settings);

  }

  /*
  ==========================
      UPDATE SECTION
  ==========================
  */

  updateSection(

    section,

    values,

  ) {

    const settings =
      this.getSettings();

    settings[section] = {

      ...settings[section],

      ...values,

    };

    this.saveSettings(settings);

    return settings;

  }

  /*
  ==========================
      UPDATE VALUE
  ==========================
  */

  updateValue(

    section,

    key,

    value,

  ) {

    const settings =
      this.getSettings();

    if (

      !settings[section]

    ) {

      return settings;

    }

    settings[section][key] =
      value;

    this.saveSettings(settings);

    return settings;

  }

  /*
  ==========================
      GET SECTION
  ==========================
  */

  getSection(section) {

    const settings =
      this.getSettings();

    return (

      settings[section] ??

      {}

    );

  }

  /*
  ==========================
      RESET SETTINGS
  ==========================
  */

  resetSettings() {

    return SettingsStorage.reset();

  }

  /*
  ==========================
      CLEAR SETTINGS
  ==========================
  */

  clearSettings() {

    SettingsStorage.clear();

  }

  /*
  ==========================
      EXPORT SETTINGS
  ==========================
  */

  exportSettings() {

    return JSON.stringify(

      this.getSettings(),

      null,

      2

    );

  }

  /*
  ==========================
      IMPORT SETTINGS
  ==========================
  */

  importSettings(json) {

    try {

      const settings =

        JSON.parse(json);

      this.saveSettings(

        settings

      );

      return settings;

    } catch (error) {

      console.error(

        "Failed to import settings:",

        error

      );

      return this.getSettings();

    }

  }

}

export default new SettingsManager();
