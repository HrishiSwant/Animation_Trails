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

  const [

    visible,

    setVisible,

  ] = useState(false);

  const [

    mounted,

    setMounted,

  ] = useState(false);

  const inputRef =

    useRef(null);

  const dialogRef =

    useRef(null);

  /*
  ==========================
      MODAL ANIMATION
  ==========================
  */

  useEffect(() => {

    if (open) {

      setMounted(true);

      requestAnimationFrame(() => {

        setVisible(true);

      });

      return;

    }

    setVisible(false);

    const timer =

      setTimeout(() => {

        setMounted(false);

      }, 180);

    return () =>

      clearTimeout(timer);

  }, [

    open,

  ]);

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
      FOCUS TRAP
  ==========================
  */

  useEffect(() => {

    if (!open) {

      return;

    }

    function handleTab(

      event,

    ) {

      if (

        event.key !==

        "Tab"

      ) {

        return;

      }

      const focusable =

        dialogRef.current?.querySelectorAll(

          "input, button",

        );

      if (

        !focusable ||

        focusable.length === 0

      ) {

        return;

      }

      const first =

        focusable[0];

      const last =

        focusable[

          focusable.length - 1

        ];

      if (

        event.shiftKey &&

        document.activeElement === first

      ) {

        event.preventDefault();

        last.focus();

      }

      if (

        !event.shiftKey &&

        document.activeElement === last

      ) {

        event.preventDefault();

        first.focus();

      }

    }

    document.addEventListener(

      "keydown",

      handleTab,

    );

    return () =>

      document.removeEventListener(

        "keydown",

        handleTab,

      );

  }, [

    open,

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
      CLOSE
  ==========================
  */

  function handleClose() {

    setVisible(false);

    setTimeout(() => {

      onClose();

    }, 180);

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

      inputRef.current?.focus();

      return;

    }

    const name =

      value.trim();

    if (

      name ===

      project.name

    ) {

      handleClose();

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

    switch (

      event.key

    ) {

      case "Escape":

        event.preventDefault();

        handleClose();

        break;

      case "Enter":

        event.preventDefault();

        handleSave();

        break;

      default:

        break;

    }

  }

  if (

    !mounted ||

    !project

  ) {

    return null;

  }

  return (

    <div

      className={

        visible

          ? "project-rename-overlay open"

          : "project-rename-overlay"

      }

      onClick={handleClose}

    >

      <div

        ref={dialogRef}

        className={

          visible

            ? "project-rename open"

            : "project-rename"

        }

        role="dialog"

        aria-modal="true"

        aria-labelledby="rename-project-title"

        onClick={event =>

          event.stopPropagation()

        }

      >

        <div className="project-rename-header">

          <h3 id="rename-project-title">

            Rename Project

          </h3>

        </div>

        <div className="project-rename-body">

          <label>

            Project Name

          </label>

          <input

            ref={inputRef}

            type="text"

            autoComplete="off"

            spellCheck={false}

            aria-label="Project name"

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

            type="button"

            onClick={handleClose}

          >

            Cancel

          </button>

          <button

            type="button"

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
