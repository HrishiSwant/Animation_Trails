import { useState } from "react";

import "./ProjectCreator.css";

import useProject from "../../../hooks/project/useProject";

export default function ProjectCreator({

  open,

  onClose,

}) {

  const [

    name,

    setName,

  ] = useState("");

  const [

    description,

    setDescription,

  ] = useState("");

  const {

    createProject,

  } = useProject();

  if (!open) {

    return null;

  }

  /*
  ==========================
      RESET FORM
  ==========================
  */

  function resetForm() {

    setName("");

    setDescription("");

  }

  /*
  ==========================
      CLOSE
  ==========================
  */

  function handleClose() {

    resetForm();

    onClose();

  }

  /*
  ==========================
      CREATE PROJECT
  ==========================
  */

  function handleCreate() {

    createProject({

      name,

      description,

    });

    resetForm();

    onClose();

  }

  return (

    <div

      className="project-creator-overlay"

      onClick={handleClose}

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

            onClick={handleClose}

          >

            ✕

          </button>

        </div>

        {/* ==========================
            BODY
        ========================== */}

        <div className="project-creator-body">

          <div className="form-group">

            <label>

              Project Name

            </label>

            <input

              type="text"

              placeholder="My Awesome Project"

              value={name}

              onChange={event =>

                setName(

                  event.target.value,

                )

              }

            />

          </div>

          <div className="form-group">

            <label>

              Description

            </label>

            <textarea

              rows={4}

              placeholder="Describe your project..."

              value={description}

              onChange={event =>

                setDescription(

                  event.target.value,

                )

              }

            />

          </div>

        </div>

        {/* ==========================
            FOOTER
        ========================== */}

        <div className="project-creator-footer">

          <button

            className="cancel-btn"

            onClick={handleClose}

          >

            Cancel

          </button>

          <button

            className="create-btn"

            onClick={handleCreate}

          >

            Create

          </button>

        </div>

      </div>

    </div>

  );

}
