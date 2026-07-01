import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ProjectCreator.css";

import useProject from "../../../hooks/project/useProject";
import GeneralSection from "./sections/GeneralSection";
import TemplateSection from "./sections/TemplateSection";
import AppearanceSection from "./sections/AppearanceSection";
import TagsSection from "./sections/TagsSection";
import FavoriteSection from "./sections/FavoriteSection";
import PreviewSection from "./sections/PreviewSection";
import ProjectTemplates from "../../../core/project/ProjectTemplates";
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

  setVisible(false);

  setTimeout(() => {

    resetForm();

    onClose();

  }, 180);

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

] = useState(false);

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

        }
      
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

  <GeneralSection

    form={form}

    setForm={setForm}

    errors={errors}

    inputRef={inputRef}

  />

  <TemplateSection

    form={form}

    setForm={setForm}

  />

  <AppearanceSection

    form={form}

    setForm={setForm}

  />

  <TagsSection

    form={form}

    setForm={setForm}

    errors={errors}

  />

  <FavoriteSection

    form={form}

    setForm={setForm}

  />

  <PreviewSection

    form={form}

  />

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
