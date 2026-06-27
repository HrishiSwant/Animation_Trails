import useDeveloperSettings from "../../../hooks/settings/useDeveloperSettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const logLevelOptions = [

  {
    value: "error",
    label: "Errors Only",
  },

  {
    value: "warn",
    label: "Warnings",
  },

  {
    value: "info",
    label: "Information",
  },

  {
    value: "debug",
    label: "Debug",
  },

];

export default function DeveloperSettings() {

  const developer =
    useDeveloperSettings();

  return (

    <div className="settings-section">

      <h2>

        ⚙️ Developer

      </h2>

      <p>

        Configure development and debugging tools.

      </p>

      <SettingsToggle

        label="Developer Mode"

        description="Enable developer-specific functionality."

        checked={developer.developerMode}

        onChange={developer.setDeveloperMode}

      />

      <SettingsToggle

        label="Show Debug Information"

        description="Display additional debugging information throughout the application."

        checked={developer.showDebugInfo}

        onChange={developer.setShowDebugInfo}

      />

      <SettingsToggle

        label="Performance Monitor"

        description="Enable performance monitoring tools."

        checked={developer.performanceMonitor}

        onChange={developer.setPerformanceMonitor}

      />

      <SettingsSelect

        label="Log Level"

        description="Choose how much information is logged."

        value={developer.logLevel}

        options={logLevelOptions}

        onChange={developer.setLogLevel}

      />

    </div>

  );

}
