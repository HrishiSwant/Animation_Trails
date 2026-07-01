import "./ProjectCreator.css";

export default function ProjectCreator({

  open,

  onClose,

}) {

  if (!open) {

    return null;

  }

  return (

    <div

      className="project-creator-overlay"

      onClick={onClose}

    >

      <div

        className="project-creator"

        onClick={event =>

          event.stopPropagation()

        }

      >

        {/* ==========================
            HEADER
        ========================== */}

        <div className="project-creator-header">

          <h2>

            Create Project

          </h2>

          <button

            className="project-close"

            onClick={onClose}

          >

            ✕

          </button>

        </div>

        {/* ==========================
            BODY
        ========================== */}

        <div className="project-creator-body">

          <p>

            Project creation form will
            be added in the next step.

          </p>

        </div>

        {/* ==========================
            FOOTER
        ========================== */}

        <div className="project-creator-footer">

          <button

            className="cancel-btn"

            onClick={onClose}

          >

            Cancel

          </button>

          <button

            className="create-btn"

            disabled

          >

            Create

          </button>

        </div>

      </div>

    </div>

  );

}
