import useSettings from "./useSettings";

export default function useSketchSettings() {

  const settings =
    useSettings();

  const sketch =
    settings.settings.sketch;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "sketch",

      key,

      value,

    );

  }

  function setDefaultTool(value) {

    update(

      "defaultTool",

      value,

    );

  }

  function setShowGrid(value) {

    update(

      "showGrid",

      value,

    );

  }

  function setSnapToGrid(value) {

    update(

      "snapToGrid",

      value,

    );

  }

  function setSmoothDrawing(value) {

    update(

      "smoothDrawing",

      value,

    );

  }

  return {

    sketch,

    defaultTool:
      sketch.defaultTool,

    showGrid:
      sketch.showGrid,

    snapToGrid:
      sketch.snapToGrid,

    smoothDrawing:
      sketch.smoothDrawing,

    update,

    setDefaultTool,

    setShowGrid,

    setSnapToGrid,

    setSmoothDrawing,

  };

}
