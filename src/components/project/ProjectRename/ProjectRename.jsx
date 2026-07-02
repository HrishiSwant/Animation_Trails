import {

  useEffect,

  useRef,

  useState,

} from "react";

import "./ProjectRename.css";

export default function ProjectRename({

  open,

  project,

  onRename,

  onClose,

}) {

  const [

    value,

    setValue,

  ] = useState("");

  const inputRef =

    useRef(null);

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

    requestAnimationFrame(() => {

      inputRef.current?.focus();

      inputRef.current?.select();

    });

  }, [

    open,

    project,

  ]);

  function handleSave() {

    const name =

      value.trim();

    if (!name) {

      inputRef.current?.focus();

      return;

    }

    onRename(name);

  }

  function handleKeyDown(

    event,

  ) {

    if (

      event.key ===

      "Escape"

    ) {

      onClose();

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

              !value.trim()

            }

          >

            Save

          </button>

        </div>

      </div>

    </div>

  );

}
