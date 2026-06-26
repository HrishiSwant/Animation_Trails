import "./TaskEditor.css";

export default function TaskEditor({

  task,

  isEditing,

  updateField,

  save,

  cancel,

}) {

  return (

    <div className="task-editor">

      <h2>

        {

          isEditing

            ? "Edit Task"

            : "New Task"

        }

      </h2>

      <div className="task-editor-form">

        <label>

          Title

        </label>

        <input

          type="text"

          value={task.title}

          placeholder="Task title..."

          onChange={(e)=>

            updateField(

              "title",

              e.target.value

            )

          }

        />

        <label>

          Description

        </label>

        <textarea

          rows={5}

          value={task.description}

          placeholder="Task description..."

          onChange={(e)=>

            updateField(

              "description",

              e.target.value

            )

          }

        />

        <label>

          Priority

        </label>

        <select

          value={task.priority}

          onChange={(e)=>

            updateField(

              "priority",

              e.target.value

            )

          }

        >

          <option value="low">

            Low

          </option>

          <option value="medium">

            Medium

          </option>

          <option value="high">

            High

          </option>

        </select>

        <label>

          Category

        </label>

        <input

          type="text"

          value={task.category}

          placeholder="General"

          onChange={(e)=>

            updateField(

              "category",

              e.target.value

            )

          }

        />

        <label>

          Due Date

        </label>

        <input

          type="date"

          value={task.dueDate}

          onChange={(e)=>

            updateField(

              "dueDate",

              e.target.value

            )

          }

        />

        <div className="task-editor-actions">

          <button

            className="save-task"

            onClick={save}

          >

            {

              isEditing

                ? "Update Task"

                : "Create Task"

            }

          </button>

          <button

            className="cancel-task"

            onClick={cancel}

          >

            Cancel

          </button>

        </div>

      </div>

    </div>

  );

}
