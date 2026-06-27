import useAccessibilitySettings from "../../../hooks/settings/useAccessibilitySettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const contrastOptions = [

  {
    value: "normal",
    label: "Normal",
  },

  {
    value: "high",
    label: "High Contrast",
  },

];

export default function AccessibilitySettings() {

  const accessibility =
    useAccessibilitySettings();

  return (

    <div className="settings-section">

      <h2>

        ♿ Accessibility

      </h2>

      <p>

        Improve usability and accessibility throughout Hrishi Studio.

      </p>

      <SettingsToggle

        label="Reduce Motion"

        description="Reduce interface animations for a more comfortable experience."

        checked={accessibility.reduceMotion}

        onChange={accessibility.setReduceMotion}

      />

      <SettingsToggle

        label="Large Interface Text"

        description="Increase text size across the application."

        checked={accessibility.largeText}

        onChange={accessibility.setLargeText}

      />

      <SettingsToggle

        label="Show Focus Indicators"

        description="Highlight keyboard focus for easier navigation."

        checked={accessibility.showFocus}

        onChange={accessibility.setShowFocus}

      />

      <SettingsSelect

        label="Contrast Mode"

        description="Choose the preferred contrast level."

        value={accessibility.contrast}

        options={contrastOptions}

        onChange={accessibility.setContrast}

      />

    </div>

  );

}
