import StorageKeys from "../storage/StorageKeys";
import DefaultSettings from "./DefaultSettings";

class SettingsStorage {

  /*
  ==========================
      LOAD SETTINGS
  ==========================
  */

  load() {

    try {

      const savedSettings =
        localStorage.getItem(

          StorageKeys.SETTINGS

        );

      if (!savedSettings) {

        return structuredClone(

          DefaultSettings

        );

      }

      return {

        ...structuredClone(

          DefaultSettings

        ),

        ...JSON.parse(

          savedSettings

        ),

      };

    } catch (error) {

      console.error(

        "Failed to load settings:",

        error

      );

      return structuredClone(

        DefaultSettings

      );

    }

  }

  /*
  ==========================
      SAVE SETTINGS
  ==========================
  */

  save(settings) {

    try {

      localStorage.setItem(

        StorageKeys.SETTINGS,

        JSON.stringify(settings)

      );

    } catch (error) {

      console.error(

        "Failed to save settings:",

        error

      );

    }

  }

  /*
  ==========================
      RESET SETTINGS
  ==========================
  */

  reset() {

    const defaults =
      structuredClone(

        DefaultSettings

      );

    this.save(defaults);

    return defaults;

  }

  /*
  ==========================
      REMOVE SETTINGS
  ==========================
  */

  clear() {

    localStorage.removeItem(

      StorageKeys.SETTINGS

    );

  }

}

export default new SettingsStorage();
