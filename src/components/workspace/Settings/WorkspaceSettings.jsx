import useWorkspaceSettings from "../../../hooks/settings/useWorkspaceSettings";

import SettingsSelect from "./SettingsSelect";
import SettingsToggle from "./SettingsToggle";

const defaultToolOptions = [

  {
    value: "dashboard",
    label: "Dashboard",
  },

  {
    value: "notes",
    label: "Notes",
  },

  {
    value: "sketch",
    label: "Sketch Board",
  },

  {
    value: "assets",
    label: "Assets",
  },

  {
    value: "tasks",
    label: "Tasks",
  },

  {
    value: "storage",
    label: "Storage",
  },

  {
    value: "export",
    label: "Export",
  },

];

export default function WorkspaceSettings() {

  const workspace =
    useWorkspaceSettings();

  return (

    <div className="settings-section">

      <h2>

        🖥️ Workspace

      </h2>

      <p>

        Configure how Hrishi Studio behaves when you work.

      </p>

      <SettingsSelect

        label="Default Workspace"

        description="Choose which workspace opens by default."

        value={workspace.defaultTool}

        options={defaultToolOptions}

        onChange={workspace.setDefaultTool}

      />

      <SettingsToggle

        label="Autosave"

        description="Automatically save changes while you work."

        checked={workspace.autosave}

        onChange={workspace.setAutosave}

      />

      <SettingsToggle

        label="Show Welcome Screen"

        description="Display the welcome dashboard when Hrishi Studio starts."

        checked={workspace.showWelcome}

        onChange={workspace.setShowWelcome}

      />

    </div>

  );

}
