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
