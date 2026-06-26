import useSketchSettings from "../../../hooks/settings/useSketchSettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const toolOptions = [

  {
    value: "pen",
    label: "Pen",
  },

  {
    value: "brush",
    label: "Brush",
  },

  {
    value: "eraser",
    label: "Eraser",
  },

];

export default function SketchSettings() {

  const sketch =
    useSketchSettings();

  return (

    <div className="settings-section">

      <h2>

        ✏️ Sketch Board

      </h2>

      <p>

        Configure the default behavior of the Sketch Board.

      </p>

      <SettingsSelect

        label="Default Tool"

        description="Select the tool used when opening the Sketch Board."

        value={sketch.defaultTool}

        options={toolOptions}

        onChange={sketch.setDefaultTool}

      />

      <SettingsToggle

        label="Show Grid"

        description="Display a background grid while drawing."

        checked={sketch.showGrid}

        onChange={sketch.setShowGrid}

      />

      <SettingsToggle

        label="Snap To Grid"

        description="Snap drawing objects to the nearest grid point."

        checked={sketch.snapToGrid}

        onChange={sketch.setSnapToGrid}

      />

      <SettingsToggle

        label="Smooth Drawing"

        description="Apply smoothing while drawing freehand."

        checked={sketch.smoothDrawing}

        onChange={sketch.setSmoothDrawing}

      />

    </div>

  );

}
