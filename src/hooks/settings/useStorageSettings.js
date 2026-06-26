import useSettings from "./useSettings";

export default function useStorageSettings() {

  const settings =
    useSettings();

  const storage =
    settings.settings.storage;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "storage",

      key,

      value,

    );

  }

  function setShowStatistics(value) {

    update(

      "showStatistics",

      value,

    );

  }

  function setConfirmClear(value) {

    update(

      "confirmClear",

      value,

    );

  }

  function setAutoCleanup(value) {

    update(

      "autoCleanup",

      value,

    );

  }

  function setUnit(value) {

    update(

      "unit",

      value,

    );

  }

  return {

    storage,

    showStatistics:
      storage.showStatistics,

    confirmClear:
      storage.confirmClear,

    autoCleanup:
      storage.autoCleanup,

    unit:
      storage.unit,

    update,

    setShowStatistics,

    setConfirmClear,

    setAutoCleanup,

    setUnit,

  };

}
