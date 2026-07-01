import { useEffect, useState } from "react";
import "./ProjectPreview.css";

export default function ProjectPreview({

  project,

}) {

  const [

    animate,

    setAnimate,

  ] = useState(false);

  useEffect(() => {

    setAnimate(true);

    const timer =

      setTimeout(() => {

        setAnimate(false);

      }, 220);

    return () =>

      clearTimeout(timer);

  }, [

    project,

  ]);

  return (

    <div

      className={

        animate

          ? "project-preview-card animate"

          : "project-preview-card"

      }

    >

      <div className="project-preview-header">

        <div

          className="project-preview-icon"

          style={{

            background:

              project.color,

          }}

        >

          {project.icon}

        </div>

        <div className="project-preview-meta">

          <strong>

            {

              project.name ||

              "Untitled Project"

            }

          </strong>

          <span>

            {

              project.description ||

              "No description"

            }

          </span>

        </div>

      </div>

      <div className="preview-template">

        Template:

        <strong>

          {" "}

          {project.template}

        </strong>

      </div>

      {

        project.tags.length > 0 && (

          <div className="project-preview-tags">

            {

              project.tags.map(

                tag => (

                  <span

                    key={tag}

                    className="preview-tag"

                  >

                    {tag}

                  </span>

                ),

              )

            }

          </div>

        )

      }

      {

        project.favorite && (

          <div className="preview-favorite">

            ⭐ Favorite Project

          </div>

        )

      }

    </div>

  );

}
