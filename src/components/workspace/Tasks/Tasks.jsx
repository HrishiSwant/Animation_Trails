import "./Tasks.css";

import useTasksWorkspace from "../../../hooks/tasks/useTasksWorkspace";

import TaskEditor from "./TaskEditor";
import TaskFilters from "./TaskFilters";
import TaskStats from "./TaskStats";
import TaskCard from "./TaskCard";

export default function Tasks() {

  const workspace =
    useTasksWorkspace();

  return (

    <div className="tasks">

      <TaskEditor

        task={workspace.task}

        isEditing={workspace.isEditing}

        updateField={workspace.updateField}

        save={workspace.save}

        cancel={workspace.cancel}

      />

      <TaskFilters

        search={workspace.search}

        setSearch={workspace.setSearch}

        category={workspace.category}

        setCategory={workspace.setCategory}

        priority={workspace.priority}

        setPriority={workspace.setPriority}

        status={workspace.status}

        setStatus={workspace.setStatus}

        sort={workspace.sort}

        setSort={workspace.setSort}

      />

      <TaskStats

        tasks={workspace.filteredTasks}

      />

      {workspace.filteredTasks.length === 0 ? (

        <div className="tasks-empty">

          <h2>

            No Tasks Yet

          </h2>

          <p>

            Create your first task using the editor above.

          </p>

        </div>

      ) : (

        <div className="tasks-list">

          {workspace.filteredTasks.map(task => (

            <TaskCard

              key={task.id}

              task={task}

              onToggleCompleted={
                workspace.toggleCompleted
              }

              onToggleFavorite={
                workspace.toggleFavorite
              }

              onTogglePinned={
                workspace.togglePinned
              }

              onEdit={
                workspace.openEdit
              }

              onDelete={
                workspace.deleteTask
              }

            />

          ))}

        </div>

      )}

    </div>

  );

}
