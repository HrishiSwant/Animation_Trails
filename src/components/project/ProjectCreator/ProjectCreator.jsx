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
import FavoriteToggle from "./components/FavoriteToggle";
import ProjectPreview from "./components/ProjectPreview";

import ProjectValidator from "../../../core/project/ProjectValidator";

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

  const [

  visible,

  setVisible,

] = useState(false);

  const inputRef =
    useRef(null);

  const {

    createProject,

  } = useProject();

  const [

  errors,

  setErrors,

] = useState({});

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
    VALIDATION
==========================
*/

useEffect(() => {

  if (!open) {

    return;

  }

  setErrors(

    ProjectValidator

      .validate(form)

      .errors,

  );

}, [

  form,

  open,

]);

  /*
==========================
    MODAL ANIMATION
==========================
*/

useEffect(() => {

  if (open) {

    requestAnimationFrame(() => {

      setVisible(true);

    });

  } else {

    setVisible(false);

  }

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

      setErrors({});

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

  const result =

    ProjectValidator.validate(

      form,

    );

  if (

    !result.valid

  ) {

    setErrors(

      result.errors,

    );

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

    name:

      form.name.trim(),

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

const [

  mounted,

  setMounted,

] = useState(open);

useEffect(() => {

  if (open) {

    setMounted(true);

    return;

  }

  const timer =

    setTimeout(() => {

      setMounted(false);

    }, 180);

  return () =>

    clearTimeout(timer);

}, [

  open,

]);

if (!mounted) {

  return null;

}

  return (

    <div
        className={

    visible

      ? "project-creator-overlay open"

      : "project-creator-overlay"
      
      onClick={handleClose}
    >

      <div
          className={

    visible

      ? "project-creator open"

      : "project-creator"

  }
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

      value={form.name}

      onChange={event =>

        setForm({

          ...form,

          name:

            event.target.value,

        })

      }

    />

    {

      errors.name && (

        <div className="form-error">

          {errors.name}

        </div>

      )

    }

  </div>

  <div className="form-group">

    <label>

      Description

    </label>

    <textarea

      rows={4}

      placeholder="Describe your project..."

      value={form.description}

      onChange={event =>

        setForm({

          ...form,

          description:

            event.target.value,

        })

      }

    />

    {

      errors.description && (

        <div className="form-error">

          {errors.description}

        </div>

      )

    }

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
  {

    errors.tags && (

    <div className="form-error">

      {errors.tags}

    </div>

  )

}

</section>

          {/* ==========================
    FAVORITE
========================== */}

<section className="wizard-section">

  <h3>

    Favorite

  </h3>

  <FavoriteToggle

    value={form.favorite}

    onChange={favorite =>

      setForm({

        ...form,

        favorite,

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

              <ProjectPreview

                project={form}

                />

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

  Object.keys(errors)

    .length > 0

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
