import "./TaskCard.css";

import TaskUtils from "../../../core/tasks/TaskUtils";

export default function TaskCard({

  task,

  onToggleCompleted,

  onToggleFavorite,

  onTogglePinned,

  onEdit,

  onDelete,

}) {

  return (

    <div

      className={`task-card ${

        task.completed

          ? "completed"

          : ""

      } ${

        TaskUtils.isOverdue(task)

          ? "overdue"

          : ""

      }`}

    >

      <div className="task-header">

        <input

          type="checkbox"

          checked={task.completed}

          onChange={() =>

            onToggleCompleted(

              task.id

            )

          }

        />

        <div className="task-main">

          <h3>

            {task.title}

          </h3>

          {

            task.description && (

              <p>

                {task.description}

              </p>

            )

          }

        </div>

      </div>

      <div className="task-meta">

        <span className="task-priority">

          🚩 {task.priority}

        </span>

        <span className="task-category">

          📁 {task.category}

        </span>

        <span className="task-date">

          📅 {

            TaskUtils.formatDate(

              task.dueDate

            )

          }

        </span>

      </div>

      <div className="task-actions">

        <button

          onClick={() =>

            onToggleFavorite(

              task.id

            )

          }

        >

          {

            task.favorite

              ? "⭐"

              : "☆"

          }

        </button>

        <button

          onClick={() =>

            onTogglePinned(

              task.id

            )

          }

        >

          {

            task.pinned

              ? "📌"

              : "📍"

          }

        </button>

        <button

          onClick={() =>

            onEdit(task)

          }

        >

          ✏️

        </button>

        <button

          onClick={() =>

            onDelete(

              task.id

            )

          }

        >

          🗑️

        </button>

      </div>

    </div>

  );

}
