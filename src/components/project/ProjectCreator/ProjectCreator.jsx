import {

  useEffect,

  useRef,

  useState,

} from "react";

import "./ProjectCreator.css";

import useProject from "../../../hooks/project/useProject";
import ProjectTemplates from "../../../core/project/ProjectTemplates";

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

  const [

  template,

  setTemplate,

] = useState("blank");

  const inputRef =

    useRef(null);

  const {

    createProject,

  } = useProject();

  /*
  ==========================
      AUTO FOCUS
  ==========================
  */

  useEffect(() => {

    if (!open) {

      return;

    }

    requestAnimationFrame(() => {

      inputRef.current?.focus();

    });

  }, [

    open,

  ]);

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

  const projectName =

    name.trim();

  if (!projectName) {

    inputRef.current?.focus();

    return;

  }

  const templateProject =

    ProjectTemplates.create(

      template,

    );

  createProject({

    ...templateProject,

    name: projectName,

    description:

      description.trim(),

    template,

  });

  handleClose();

}
  /*
  ==========================
      KEYBOARD
  ==========================
  */

  function handleKeyDown(

    event,

  ) {

    if (

      event.key ===

      "Escape"

    ) {

      handleClose();

      return;

    }

    if (

      event.key ===

      "Enter" &&

      !event.shiftKey

    ) {

      const target =

        event.target;

      const isTextarea =

        target.tagName ===

        "TEXTAREA";

      if (!isTextarea) {

        event.preventDefault();

        handleCreate();

      }

    }

  }

  if (!open) {

    return null;

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

        onKeyDown={

          handleKeyDown

        }

      >

        {/* ==========================
            HEADER
        ========================== */}

        <div className="project-creator-header">

          <h2>

            Create New Project

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

          {/* ==========================
              GENERAL
          ========================== */}

          <section className="wizard-section">

            <h3>

              General

            </h3>

            <div className="form-group">

              <label>

                Project Name

              </label>

              <input

                ref={inputRef}

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

          </section>

          {/* ==========================
              TEMPLATE
          ========================== */}

          <section className="wizard-section">

            <h3>

              Template

            </h3>

            <div className="template-grid">

  {

    ProjectTemplates

      .getAll()

      .map(item => (

        <button

          key={item.id}

          className={

            template === item.id

              ? "template-card active"

              : "template-card"

          }

          onClick={() =>

            setTemplate(

              item.id,

            )

          }

        >

          <div className="template-icon">

            {item.icon}

          </div>

          <div className="template-name">

            {item.name}

          </div>

          <div className="template-description">

            {item.description}

          </div>

        </button>

      ))

  }

</div>

          </section>

          {/* ==========================
              APPEARANCE
          ========================== */}

          <section className="wizard-section">

            <h3>

              Appearance

            </h3>

            <div className="wizard-placeholder">

              Icon and Color pickers
              will be added later.

            </div>

          </section>

          {/* ==========================
              PREVIEW
          ========================== */}

          <section className="wizard-section">

            <h3>

              Preview

            </h3>

            <div className="wizard-placeholder">

              Live project preview
              will appear here.

            </div>

          </section>

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

            disabled={

              !name.trim()

            }

            onClick={

              handleCreate

            }

          >

            Create Project

          </button>

        </div>

      </div>

    </div>

  );

}
