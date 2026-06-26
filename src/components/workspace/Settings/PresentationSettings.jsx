import usePresentationSettings from "../../../hooks/settings/usePresentationSettings";

import SettingsSelect from "./SettingsSelect";
import SettingsToggle from "./SettingsToggle";
import SettingsInput from "./SettingsInput";

const transitionOptions = [

  {
    value: "fade",
    label: "Fade",
  },

  {
    value: "slide",
    label: "Slide",
  },

  {
    value: "zoom",
    label: "Zoom",
  },

  {
    value: "none",
    label: "None",
  },

];

export default function PresentationSettings() {

  const presentation =
    usePresentationSettings();

  return (

    <div className="settings-section">

      <h2>

        🎬 Presentation

      </h2>

      <p>

        Customize how Presentation Mode behaves.

      </p>

      <SettingsToggle

        label="Start in Fullscreen"

        description="Automatically enter fullscreen when Presentation Mode starts."

        checked={presentation.fullscreen}

        onChange={presentation.setFullscreen}

      />

      <SettingsToggle

        label="Enable Auto Play"

        description="Automatically advance slides."

        checked={presentation.autoPlay}

        onChange={presentation.setAutoPlay}

      />

      <SettingsInput

        label="Auto Play Interval"

        description="Time between slides in milliseconds."

        type="number"

        value={presentation.interval}

        min={1000}

        step={500}

        onChange={presentation.setInterval}

      />

      <SettingsSelect

        label="Transition"

        description="Choose the slide transition animation."

        value={presentation.transition}

        options={transitionOptions}

        onChange={presentation.setTransition}

      />

      <SettingsToggle

        label="Show Progress Bar"

        description="Display presentation progress at the top of the screen."

        checked={presentation.showProgress}

        onChange={presentation.setShowProgress}

      />

    </div>

  );

}
