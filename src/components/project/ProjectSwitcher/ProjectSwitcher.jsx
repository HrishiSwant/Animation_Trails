import { useState } from "react";

import "./ProjectSwitcher.css";

export default function ProjectSwitcher() {

  const [

    open,

    setOpen,

  ] = useState(false);

  /*
  ==========================
      TEMP DATA
  ==========================
  */

  const projects = [

    {

      id: 1,

      name: "Animation Showcase",

    },

    {

      id: 2,

      name: "Portfolio",

    },

    {

      id: 3,

      name: "Creative Lab",

    },

    {

      id: 4,

      name: "Website",

    },

  ];

  return (

    <div className="project-switcher">

      <button

        className="project-switcher-button"

        onClick={() =>

          setOpen(

            value => !value,

          )

        }

      >

        <span>

          ▼

        </span>

        <span>

          Animation Showcase

        </span>

      </button>

      {

        open && (

          <div className="project-dropdown">

            {

              projects.map(

                project => (

                  <button

                    key={project.id}

                    className="project-item"

                  >

                    {project.name}

                  </button>

                ),

              )

            }

            <div className="project-divider" />

            <button

              className="project-new"

            >

              + New Project

            </button>

          </div>

        )

      }

    </div>

  );

}
