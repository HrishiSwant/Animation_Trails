import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ProjectRename.css";

export default function ProjectRename({

  open,

  project,

  projects = [],

  onRename,

  onClose,

}) {

  const [

    value,

    setValue,

  ] = useState("");

  const [

    error,

    setError,

  ] = useState("");

  const inputRef =

    useRef(null);

  /*
  ==========================
      RESET / AUTO FOCUS
  ==========================
  */

  useEffect(() => {

    if (

      !open ||

      !project

    ) {

      return;

    }

    setValue(

      project.name,

    );

    setError("");

    requestAnimationFrame(() => {

      inputRef.current?.focus();

      inputRef.current?.select();

    });

  }, [

    open,

    project,

  ]);

  /*
  ==========================
      LIVE VALIDATION
  ==========================
  */

  useEffect(() => {

    if (

      !open ||

      !project

    ) {

      return;

    }

    setError(

      validate(),

    );

  }, [

    value,

    open,

    project,

    projects,

  ]);

  /*
  ==========================
      VALIDATE
  ==========================
  */

  function validate() {

    const name =

      value.trim();

    if (!name) {

      return "Project name is required.";

    }

    if (

      name.length > 60

    ) {

      return "Maximum 60 characters.";

    }

    const duplicate =

      projects.some(

        item =>

          item.id !== project.id &&

          item.name

            .trim()

            .toLowerCase() ===

          name.toLowerCase(),

      );

    if (duplicate) {

      return "A project with this name already exists.";

    }

    return "";

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  function handleSave() {

    const validation =

      validate();

    if (validation) {

      setError(

        validation,

      );

      return;

    }

    const name =

      value.trim();

    if (

      name ===

      project.name

    ) {

      onClose();

      return;

    }

    onRename(

      name,

    );

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

      onClose();

      return;

    }

    if (

      event.key ===

      "Enter"

    ) {

      handleSave();

    }

  }

  if (

    !open ||

    !project

  ) {

    return null;

  }

  return (

    <div

      className="project-rename-overlay"

      onClick={onClose}

    >

      <div

        className="project-rename"

        onClick={event =>

          event.stopPropagation()

        }

      >

        <div className="project-rename-header">

          <h3>

            Rename Project

          </h3>

        </div>

        <div className="project-rename-body">

          <label>

            Project Name

          </label>

          <input

            ref={inputRef}

            value={value}

            onChange={event =>

              setValue(

                event.target.value,

              )

            }

            onKeyDown={

              handleKeyDown

            }

          />

          {

            error && (

              <div className="rename-error">

                {error}

              </div>

            )

          }

        </div>

        <div className="project-rename-footer">

          <button

            onClick={onClose}

          >

            Cancel

          </button>

          <button

            onClick={handleSave}

            disabled={

              !!error

            }

          >

            Save

          </button>

        </div>

      </div>

    </div>

  );

}
