import "./RecentProjectCard.css";

function formatTime(value) {

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

export default function RecentProjectCard({

  project,

  onOpen,

}) {

  return (

    <button

      className="recent-project-card"

      onClick={() =>

        onOpen(project.id)

      }

    >

      <div className="recent-project-top">

        <span>

          🕒

        </span>

      </div>

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

        Opened {

          formatTime(

            project.lastOpened,

          )

        }

      </span>

    </button>

  );

}
