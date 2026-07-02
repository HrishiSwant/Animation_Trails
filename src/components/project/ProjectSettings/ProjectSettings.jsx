import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ProjectSettings.css";

import IconPicker from "../ProjectCreator/components/IconPicker";
import ColorPicker from "../ProjectCreator/components/ColorPicker";
import TagsInput from "../ProjectCreator/components/TagsInput";
import FavoriteToggle from "../ProjectCreator/components/FavoriteToggle";

export default function ProjectSettings({

  open,

  project,

  onSave,

  onClose,

}) {

  const [

    form,

    setForm,

  ] = useState(null);

  const [

    visible,

    setVisible,

  ] = useState(false);

  const [

    mounted,

    setMounted,

  ] = useState(false);

  const descriptionRef =

    useRef(null);

  /*
  ==========================
      OPEN / CLOSE
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
      LOAD PROJECT
  ==========================
  */

  useEffect(() => {

    if (

      !open ||

      !project

    ) {

      return;

    }

    setForm({

      description:

        project.description || "",

      icon:

        project.icon,

      color:

        project.color,

      tags:

        project.tags || [],

      favorite:

        project.favorite,

    });

    requestAnimationFrame(() => {

      descriptionRef.current?.focus();

    });

  }, [

    open,

    project,

  ]);

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

    onSave(form);

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

    }

  }

  if (

    !mounted ||

    !form ||

    !project

  ) {

    return null;

  }

  return (

    <div

      className={

        visible

          ? "project-settings-overlay open"

          : "project-settings-overlay"

      }

      onClick={handleClose}

    >

      <div

        className={

          visible

            ? "project-settings open"

            : "project-settings"

        }

        onClick={event =>

          event.stopPropagation()

        }

        onKeyDown={handleKeyDown}

      >

        {/* ==========================
            HEADER
        ========================== */}

        <div className="project-settings-header">

          <h2>

            Project Settings

          </h2>

          <button

            className="project-settings-close"

            onClick={handleClose}

          >

            ✕

          </button>

        </div>

        {/* ==========================
            BODY
        ========================== */}

        <div className="project-settings-body">

          <section className="settings-section">

            <h3>

              General

            </h3>

            <div className="form-group">

              <label>

                Description

              </label>

              <textarea

                ref={descriptionRef}

                rows={4}

                value={

                  form.description

                }

                onChange={event =>

                  setForm({

                    ...form,

                    description:

                      event.target.value,

                  })

                }

              />

            </div>

          </section>

          <section className="settings-section">

            <h3>

              Appearance

            </h3>

            <div className="form-group">

              <label>

                Icon

              </label>

              <IconPicker

                value={

                  form.icon

                }

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

                Color

              </label>

              <ColorPicker

                value={

                  form.color

                }

                onChange={color =>

                  setForm({

                    ...form,

                    color,

                  })

                }

              />

            </div>

          </section>

          <section className="settings-section">

            <h3>

              Organization

            </h3>

            <TagsInput

              value={

                form.tags

              }

              onChange={tags =>

                setForm({

                  ...form,

                  tags,

                })

              }

            />

            <FavoriteToggle

              value={

                form.favorite

              }

              onChange={favorite =>

                setForm({

                  ...form,

                  favorite,

                })

              }

            />

          </section>

          <section className="settings-section">

            <h3>

              Information

            </h3>

            <div className="settings-info">

              <div>

                <strong>

                  Template

                </strong>

                <span>

                  {

                    project.template

                  }

                </span>

              </div>

              <div>

                <strong>

                  Created

                </strong>

                <span>

                  {

                    project.createdAt

                      ? new Date(

                          project.createdAt,

                        ).toLocaleDateString()

                      : "Unknown"

                  }

                </span>

              </div>

              <div>

                <strong>

                  Last Opened

                </strong>

                <span>

                  {

                    project.lastOpened

                      ? new Date(

                          project.lastOpened,

                        ).toLocaleDateString()

                      : "Unknown"

                  }

                </span>

              </div>

            </div>

          </section>

        </div>

        {/* ==========================
            FOOTER
        ========================== */}

        <div className="project-settings-footer">

          <button

            className="cancel-btn"

            onClick={handleClose}

          >

            Cancel

          </button>

          <button

            className="create-btn"

            onClick={handleSave}

          >

            Save Changes

          </button>

        </div>

      </div>

    </div>

  );

}
