import useTasksSettings from "../../../hooks/settings/useTasksSettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const sortOptions = [

  {
    value: "newest",
    label: "Newest First",
  },

  {
    value: "oldest",
    label: "Oldest First",
  },

  {
    value: "priority",
    label: "Priority",
  },

  {
    value: "alphabetical",
    label: "Alphabetical",
  },

];

export default function TasksSettings() {

  const tasks =
    useTasksSettings();

  return (

    <div className="settings-section">

      <h2>

        ✅ Task Manager

      </h2>

      <p>

        Configure the default behavior of Task Manager.

      </p>

      <SettingsToggle

        label="Show Completed Tasks"

        description="Display completed tasks in the task list."

        checked={tasks.showCompleted}

        onChange={tasks.setShowCompleted}

      />

      <SettingsToggle

        label="Confirm Before Delete"

        description="Ask for confirmation before deleting a task."

        checked={tasks.confirmDelete}

        onChange={tasks.setConfirmDelete}

      />

      <SettingsToggle

        label="Show Task Statistics"

        description="Display live task statistics above the task list."

        checked={tasks.showStatistics}

        onChange={tasks.setShowStatistics}

      />

      <SettingsSelect

        label="Default Sort"

        description="Choose the default sorting method."

        value={tasks.defaultSort}

        options={sortOptions}

        onChange={tasks.setDefaultSort}

      />

    </div>

  );

}
