import useStorageSettings from "../../../hooks/settings/useStorageSettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const unitOptions = [

  {
    value: "mb",
    label: "Megabytes (MB)",
  },

  {
    value: "gb",
    label: "Gigabytes (GB)",
  },

];

export default function StorageSettings() {

  const storage =
    useStorageSettings();

  return (

    <div className="settings-section">

      <h2>

        💾 Storage

      </h2>

      <p>

        Configure storage usage, cleanup and monitoring.

      </p>

      <SettingsToggle

        label="Show Storage Statistics"

        description="Display live storage usage information."

        checked={storage.showStatistics}

        onChange={storage.setShowStatistics}

      />

      <SettingsToggle

        label="Warn Before Clearing Data"

        description="Require confirmation before clearing workspace data."

        checked={storage.confirmClear}

        onChange={storage.setConfirmClear}

      />

      <SettingsToggle

        label="Enable Automatic Cleanup"

        description="Automatically remove temporary cached data."

        checked={storage.autoCleanup}

        onChange={storage.setAutoCleanup}

      />

      <SettingsSelect

        label="Storage Unit"

        description="Choose how storage values are displayed."

        value={storage.unit}

        options={unitOptions}

        onChange={storage.setUnit}

      />

    </div>

  );

}
