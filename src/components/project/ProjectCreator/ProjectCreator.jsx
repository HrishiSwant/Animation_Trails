import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ProjectCreator.css";

import useProject from "../../../hooks/project/useProject";
import ProjectTemplates from "../../../core/project/ProjectTemplates";
import IconPicker from "./components/IconPicker";
import ColorPicker from "./components/ColorPicker";
import TagsInput from "./components/TagsInput";

const initialForm = {
  name: "",
  description: "",
  template: "blank",
  icon: "📁",
  color: "#6b7280",
  tags: [],
  favorite: false,
};

export default function ProjectCreator({

  open,

  onClose,

}) {

  const [

    form,

    setForm,

  ] = useState(initialForm);

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
      RESET
  ==========================
  */

  function resetForm() {

    setForm(initialForm);

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
      CREATE
  ==========================
  */

  function handleCreate() {

    const projectName =
      form.name.trim();

    if (!projectName) {

      inputRef.current?.focus();

      return;

    }

    const templateProject =
      ProjectTemplates.create(
        form.template,
      );

    createProject({

      ...templateProject,

      ...form,

      name: projectName,

      description:
        form.description.trim(),

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

      const isTextarea =
        event.target.tagName ===
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
        onKeyDown={handleKeyDown}
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

    Appearance

  </h3>

  <div className="form-group">

    <label>

      Project Icon

    </label>

    <IconPicker

      value={form.icon}

      onChange={icon =>

        setForm({

          ...form,

          icon,

        })

      }

    />

  </div>

  <div className="form-group">

    <label>

      Project Color

    </label>

    <ColorPicker

      value={form.color}

      onChange={color =>

        setForm({

          ...form,

          color,

        })

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

                      type="button"

                      className={
                        form.template ===
                        item.id
                          ? "template-card active"
                          : "template-card"
                      }

                      onClick={() =>
                        setForm({
                          ...form,
                          template:
                            item.id,
                        })
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

<div className="form-group">

  <label>

    Project Icon

  </label>

  <IconPicker

    value={form.icon}

    onChange={icon =>

      setForm({

        ...form,

        icon,

      })

    }

  />

</div>
          </section>

          {/* ==========================
    TAGS
========================== */}

<section className="wizard-section">

  <h3>

    Tags

  </h3>

  <TagsInput

    value={form.tags}

    onChange={tags =>

      setForm({

        ...form,

        tags,

      })

    }

  />

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
              !form.name.trim()
            }
            onClick={handleCreate}
          >

            Create Project

          </button>

        </div>

      </div>

    </div>

  );

}
