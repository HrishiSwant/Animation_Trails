import "./TaskFilters.css";

export default function TaskFilters({

  search,

  setSearch,

  category,

  setCategory,

  priority,

  setPriority,

  status,

  setStatus,

  sort,

  setSort,

}) {

  return (

    <div className="task-filters">

      <input

        type="text"

        placeholder="🔍 Search tasks..."

        value={search}

        onChange={(e) =>

          setSearch(

            e.target.value

          )

        }

      />

      <select

        value={category}

        onChange={(e) =>

          setCategory(

            e.target.value

          )

        }

      >

        <option value="all">

          All Categories

        </option>

        <option value="General">

          General

        </option>

        <option value="Work">

          Work

        </option>

        <option value="Personal">

          Personal

        </option>

        <option value="Study">

          Study

        </option>

        <option value="Meeting">

          Meeting

        </option>

      </select>

      <select

        value={priority}

        onChange={(e) =>

          setPriority(

            e.target.value

          )

        }

      >

        <option value="all">

          All Priorities

        </option>

        <option value="high">

          High

        </option>

        <option value="medium">

          Medium

        </option>

        <option value="low">

          Low

        </option>

      </select>

      <select

        value={status}

        onChange={(e) =>

          setStatus(

            e.target.value

          )

        }

      >

        <option value="all">

          All Tasks

        </option>

        <option value="completed">

          Completed

        </option>

        <option value="pending">

          Pending

        </option>

        <option value="favorites">

          Favorites

        </option>

        <option value="pinned">

          Pinned

        </option>

      </select>

      <select

        value={sort}

        onChange={(e) =>

          setSort(

            e.target.value

          )

        }

      >

        <option value="newest">

          Newest

        </option>

        <option value="oldest">

          Oldest

        </option>

        <option value="priority">

          Priority

        </option>

        <option value="alphabetical">

          A-Z

        </option>

      </select>

    </div>

  );

}
