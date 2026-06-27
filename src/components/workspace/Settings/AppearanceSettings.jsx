import { useEffect } from "react";

import useAppearance from "../../../hooks/settings/useAppearance";

import ThemeManager from "../../../core/theme/ThemeManager";

import SettingsSelect from "./SettingsSelect";
import SettingsToggle from "./SettingsToggle";
import SettingsColorPicker from "./SettingsColorPicker";

const themeOptions = [

  {
    value: "dark",
    label: "Dark",
  },

  {
    value: "light",
    label: "Light",
  },

];

const fontSizeOptions = [

  {
    value: "small",
    label: "Small",
  },

  {
    value: "medium",
    label: "Medium",
  },

  {
    value: "large",
    label: "Large",
  },

];

export default function AppearanceSettings() {

  const appearance = useAppearance();

  /*
  ==========================
      THEME SYNC
  ==========================
  */

  useEffect(() => {

    const unsubscribe = ThemeManager.subscribe((theme) => {

      if (appearance.theme !== theme.id) {

        appearance.setTheme(theme.id);

      }

    });

    return unsubscribe;

  }, [appearance]);

  /*
  ==========================
      HANDLERS
  ==========================
  */

  function handleThemeChange(themeId) {

    ThemeManager.setTheme(themeId);

    appearance.setTheme(themeId);

  }

  return (

    <div className="settings-section">

      <h2>

        🎨 Appearance

      </h2>

      <p>

        Customize the look and feel of Hrishi Studio.

      </p>

      <SettingsSelect

        label="Theme"

        description="Choose your preferred application theme."

        value={appearance.theme}

        options={themeOptions}

        onChange={handleThemeChange}

      />

      <SettingsColorPicker

        label="Accent Color"

        description="Select the primary accent color."

        value={appearance.accent}

        onChange={appearance.setAccent}

      />

      <SettingsSelect

        label="Font Size"

        description="Choose the default interface font size."

        value={appearance.fontSize}

        options={fontSizeOptions}

        onChange={appearance.setFontSize}

      />

      <SettingsToggle

        label="Animations"

        description="Enable interface animations."

        checked={appearance.animations}

        onChange={appearance.setAnimations}

      />

      <SettingsToggle

        label="Compact Mode"

        description="Use a denser interface layout."

        checked={appearance.compactMode}

        onChange={appearance.setCompactMode}

      />

    </div>

  );

}
