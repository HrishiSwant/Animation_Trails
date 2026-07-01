import "./ProjectPreview.css";

export default function ProjectPreview({

  project,

}) {

  return (

    <div className="project-preview-card">

      <div
        className="project-preview-header"
      >

        <div

          className="project-preview-icon"

          style={{

            background:

              project.color,

          }}

        >

          {project.icon}

        </div>

        <div>

          <h4>

            {

              project.name ||

              "Untitled Project"

            }

          </h4>

          <p>

            {

              project.description ||

              "No description"

            }

          </p>

        </div>

      </div>

      <div className="project-preview-meta">

        <span className="preview-template">

          {project.template}

        </span>

        {

          project.favorite && (

            <span className="preview-favorite">

              ⭐ Favorite

            </span>

          )

        }

      </div>

      {

        project.tags.length > 0 && (

          <div className="project-preview-tags">

            {

              project.tags.map(tag => (

                <span

                  key={tag}

                  className="preview-tag"

                >

                  {tag}

                </span>

              ))

            }

          </div>

        )

      }

    </div>

  );

}
