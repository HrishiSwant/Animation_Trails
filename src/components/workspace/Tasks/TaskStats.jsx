import "./TaskStats.css";

import TaskUtils from "../../../core/tasks/TaskUtils";

export default function TaskStats({

  tasks,

}) {

  const total =
    tasks.length;

  const completed =
    TaskUtils.getCompletedCount(
      tasks
    );

  const pending =
    TaskUtils.getPendingCount(
      tasks
    );

  const favorites =
    TaskUtils.getFavoriteCount(
      tasks
    );

  const pinned =
    TaskUtils.getPinnedCount(
      tasks
    );

  const progress =
    TaskUtils.getCompletionProgress(
      tasks
    );

  return (

    <div className="task-stats">

      <div className="task-stat-card">

        <h3>

          Total

        </h3>

        <span>

          {total}

        </span>

      </div>

      <div className="task-stat-card">

        <h3>

          Completed

        </h3>

        <span>

          {completed}

        </span>

      </div>

      <div className="task-stat-card">

        <h3>

          Pending

        </h3>

        <span>

          {pending}

        </span>

      </div>

      <div className="task-stat-card">

        <h3>

          Favorites

        </h3>

        <span>

          {favorites}

        </span>

      </div>

      <div className="task-stat-card">

        <h3>

          Pinned

        </h3>

        <span>

          {pinned}

        </span>

      </div>

      <div className="task-progress">

        <div className="task-progress-header">

          <span>

            Progress

          </span>

          <span>

            {progress}%

          </span>

        </div>

        <div className="task-progress-bar">

          <div

            className="task-progress-fill"

            style={{

              width:
                `${progress}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}
