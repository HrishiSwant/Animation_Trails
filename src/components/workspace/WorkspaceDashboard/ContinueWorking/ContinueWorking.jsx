import "./ContinueWorking.css";

import useProject from "../../../../hooks/project/useProject";

function formatLastOpened(value) {

  if (!value) {

    return "Never";

  }

  const diff =

    Math.floor(

      (Date.now() - value) /

      60000,

    );

  if (diff < 1) {

    return "Just now";

  }

  if (diff < 60) {

    return `${diff} min ago`;

  }

  const hours =

    Math.floor(diff / 60);

  if (hours < 24) {

    return `${hours} hr ago`;

  }

  const days =

    Math.floor(hours / 24);

  if (days === 1) {

    return "Yesterday";

  }

  if (days < 7) {

    return `${days} days ago`;

  }

  return new Date(

    value,

  ).toLocaleDateString();

}

export default function ContinueWorking() {

  const {

    projects,

    openProject,

  } = useProject();

  const project =

    [...projects]

      .sort(

        (a, b) =>

          (b.lastOpened || 0) -

          (a.lastOpened || 0),

      )[0];

  if (!project) {

    return null;

  }

  return (

    <section className="continue-working">

      <div className="continue-working-header">

        <h2>

          ▶ Continue Working

        </h2>

        <p>

          Jump back into your most recent project.

        </p>

      </div>

      <div className="continue-working-card">

        <div>

          <h3>

            {project.name}

          </h3>

          <p>

            {

              project.template ||

              "Custom Project"

            }

          </p>

          <span>

            Last opened{" "}

            {

              formatLastOpened(

                project.lastOpened,

              )

            }

          </span>

        </div>

        <button

          className="continue-button"

          onClick={() =>

            openProject(

              project.id,

            )

          }

        >

          Continue →

        </button>

      </div>

    </section>

  );

}
