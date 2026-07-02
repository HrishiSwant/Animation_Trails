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
import SectionAnimation from "../../common/SectionAnimation/SectionAnimation";

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

  const [

  creating,

  setCreating,

] = useState(false);

  const [

  mounted,

  setMounted,

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

  setCreating(true);

  setTimeout(() => {

    setCreating(false);

    handleClose();

  }, 650);

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

/*
==========================
    MOUNT / UNMOUNT
==========================
*/

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

<SectionAnimation delay={0}>

  <GeneralSection

    form={form}

    setForm={setForm}

    errors={errors}

    inputRef={inputRef}

  />

</SectionAnimation>

<SectionAnimation delay={40}>

  <TemplateSection

    form={form}

    setForm={setForm}

  />

</SectionAnimation>

<SectionAnimation delay={80}>

  <AppearanceSection

    form={form}

    setForm={setForm}

  />

</SectionAnimation>

<SectionAnimation delay={120}>

  <TagsSection

    form={form}

    setForm={setForm}

    errors={errors}

  />

</SectionAnimation>

<SectionAnimation delay={160}>

  <FavoriteSection

    form={form}

    setForm={setForm}

  />

</SectionAnimation>

<SectionAnimation delay={200}>

  <PreviewSection

    form={form}

  />

</SectionAnimation>

</div>


        {

  creating && (

    <div className="project-success">

      <div className="project-success-icon">

        ✓

      </div>

      <h3>

        Project Created

      </h3>

      <p>

        Your project is ready.

      </p>

    </div>

  )

}

        {/* ==========================
            FOOTER
        ========================== */}

        <div className="project-creator-footer">

          <button

  className="cancel-btn"

  disabled={creating}

  onClick={handleClose}

>
            Cancel

  </button>

  <button

    className="create-btn"

    disabled={

      creating ||

      Object.keys(errors).length > 0

    }

    onClick={handleCreate}

  >

    {

      creating

        ? "Creating..."

        : "Create Project"

    }

  </button>

</div>



      </div>

    </div>

  );

}
