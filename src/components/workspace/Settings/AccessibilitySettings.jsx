import useAccessibility from "../../../hooks/settings/useAccessibility";

import SettingsToggle from "./SettingsToggle";

export default function AccessibilitySettings() {

  const accessibility =
    useAccessibility();

  return (

    <div className="settings-section">

      <h2>

        ♿ Accessibility

      </h2>

      <p>

        Configure accessibility options for the application.

      </p>

      <SettingsToggle

        label="High Contrast"

        description="Increase contrast for better readability."

        checked={
          accessibility.accessibility.highContrast
        }

        onChange={
          accessibility.setHighContrast
        }

      />

      <SettingsToggle

        label="Reduce Motion"

        description="Reduce interface animations."

        checked={
          accessibility.accessibility.reduceMotion
        }

        onChange={
          accessibility.setReduceMotion
        }

      />

      <SettingsToggle

        label="Large Click Targets"

        description="Increase the size of interactive controls."

        checked={
          accessibility.accessibility.largeClickTargets
        }

        onChange={
          accessibility.setLargeClickTargets
        }

      />

      <SettingsToggle

        label="Keyboard Navigation"

        description="Enable enhanced keyboard navigation."

        checked={
          accessibility.accessibility.keyboardNavigation
        }

        onChange={
          accessibility.setKeyboardNavigation
        }

      />

      <SettingsToggle

        label="Focus Indicators"

        description="Always display visible focus outlines."

        checked={
          accessibility.accessibility.focusIndicators
        }

        onChange={
          accessibility.setFocusIndicators
        }

      />

    </div>

  );

}
