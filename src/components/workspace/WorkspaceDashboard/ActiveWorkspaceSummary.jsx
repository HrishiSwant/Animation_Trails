import "./ActiveWorkspaceSummary.css";

function formatLastOpened(value) {

  if (!value) {

    return "Never";

  }

  const date =

    new Date(value);

  const today =

    new Date();

  if (

    date.toDateString() ===

    today.toDateString()

  ) {

    return "Today";

  }

  return date.toLocaleDateString();

}

export default function ActiveWorkspaceSummary({

  project,

}) {

  if (!project) {

    return null;

  }

  return (

    <section className="active-workspace">

      <div className="active-workspace-header">

        <h2>

          Active Workspace

        </h2>

        <span>

          {project.icon}

        </span>

      </div>

      <h3>

        {project.name}

      </h3>

      <p>

        {project.template || "Blank"} Template

      </p>

      <div className="active-workspace-meta">

        <span>

          ⭐ {project.favorite ? "Favorite" : "Not Favorite"}

        </span>

        <span>

          Last Opened: {formatLastOpened(project.lastOpened)}

        </span>

      </div>

      {

        project.tags?.length > 0 && (

          <div className="active-workspace-tags">

            {

              project.tags.map(tag => (

                <span key={tag}>

                  {tag}

                </span>

              ))

            }

          </div>

        )

      }

    </section>

  );

}
