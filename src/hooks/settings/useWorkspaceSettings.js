import useSettings from "./useSettings";

export default function useWorkspaceSettings() {

  /*
  ==========================
      SETTINGS
  ==========================
  */

  const settings =
    useSettings();

  const workspace =
    settings.settings.workspace;

  /*
  ==========================
      UPDATE
  ==========================
  */

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "workspace",

      key,

      value,

    );

  }

  /*
  ==========================
      HELPERS
  ==========================
  */

  function setDefaultTool(tool) {

    update(

      "defaultTool",

      tool,

    );

  }

  function setAutosave(enabled) {

    update(

      "autosave",

      enabled,

    );

  }

  function setShowWelcome(enabled) {

    update(

      "showWelcome",

      enabled,

    );

  }

  return {

    workspace,

    defaultTool:
      workspace.defaultTool,

    autosave:
      workspace.autosave,

    showWelcome:
      workspace.showWelcome,

    update,

    setDefaultTool,

    setAutosave,

    setShowWelcome,

  };

}
