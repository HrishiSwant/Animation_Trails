import "./ProjectDashboard.css";

export default function DashboardActions({

  project,

  onRename,

  onDuplicate,

  onFavorite,

  onSettings,

}) {

  if (!project) {

    return null;

  }

  return (

    <div className="dashboard-actions">

      <button

        type="button"

        onClick={onRename}

      >

        ✏ Rename

      </button>

      <button

        type="button"

        onClick={onDuplicate}

      >

        📄 Duplicate

      </button>

      <button

        type="button"

        onClick={onFavorite}

      >

        {

          project.favorite

            ? "★ Unfavorite"

            : "☆ Favorite"

        }

      </button>

      <button

        type="button"

        onClick={onSettings}

      >

        ⚙ Settings

      </button>

    </div>

  );

}
