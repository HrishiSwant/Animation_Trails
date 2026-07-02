import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ProjectDelete.css";

export default function ProjectDelete({

  open,

  project,

  onDelete,

  onClose,

}) {

  const [

    visible,

    setVisible,

  ] = useState(false);

  const [

    mounted,

    setMounted,

  ] = useState(false);

  const cancelRef =

    useRef(null);

  useEffect(() => {

    if (open) {

      setMounted(true);

      requestAnimationFrame(() => {

        setVisible(true);

        cancelRef.current?.focus();

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

  function handleClose() {

    setVisible(false);

    setTimeout(() => {

      onClose();

    }, 180);

  }

  function handleKeyDown(

    event,

  ) {

    if (

      event.key ===

      "Escape"

    ) {

      handleClose();

    }

    if (

      event.key ===

      "Enter"

    ) {

      onDelete();

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

          ? "project-delete-overlay open"

          : "project-delete-overlay"

      }

      onClick={handleClose}

    >

      <div

        className={

          visible

            ? "project-delete open"

            : "project-delete"

        }

        onClick={

          event =>

            event.stopPropagation()

        }

        onKeyDown={

          handleKeyDown

        }

      >

        <div className="project-delete-header">

          <h3>

            Delete Project

          </h3>

        </div>

        <div className="project-delete-body">

          <p>

            Delete

            <strong>

              {" "}

              {project.name}

            </strong>

            ?

          </p>

          <small>

            This action cannot be undone.

          </small>

        </div>

        <div className="project-delete-footer">

          <button

            ref={cancelRef}

            onClick={handleClose}

          >

            Cancel

          </button>

          <button

            className="danger"

            onClick={onDelete}

          >

            Delete

          </button>

        </div>

      </div>

    </div>

  );

}
