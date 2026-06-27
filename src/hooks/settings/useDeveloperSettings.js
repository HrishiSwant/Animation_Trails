import useSettings from "./useSettings";

export default function useDeveloperSettings() {

  const settings =
    useSettings();

  const developer =
    settings.settings.developer;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "developer",

      key,

      value,

    );

  }

  function setDeveloperMode(value) {

    update(

      "developerMode",

      value,

    );

  }

  function setShowDebugInfo(value) {

    update(

      "showDebugInfo",

      value,

    );

  }

  function setPerformanceMonitor(value) {

    update(

      "performanceMonitor",

      value,

    );

  }

  function setLogLevel(value) {

    update(

      "logLevel",

      value,

    );

  }

  return {

    developer,

    developerMode:
      developer.developerMode,

    showDebugInfo:
      developer.showDebugInfo,

    performanceMonitor:
      developer.performanceMonitor,

    logLevel:
      developer.logLevel,

    update,

    setDeveloperMode,

    setShowDebugInfo,

    setPerformanceMonitor,

    setLogLevel,

  };

}
