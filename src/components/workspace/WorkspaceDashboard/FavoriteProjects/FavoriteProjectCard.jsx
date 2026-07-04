import "./FavoriteProjectCard.css";

export default function FavoriteProjectCard({

  project,

  onOpen,

}) {

  return (

    <button

      className="favorite-project-card"

      onClick={() => onOpen(project.id)}

    >

      <div className="favorite-project-top">

        <span className="favorite-project-icon">

          ⭐

        </span>

      </div>

      <h3>

        {project.name}

      </h3>

      <p>

        {project.template ||

          "Custom Project"}

      </p>

      <span>

        {new Date(

          project.updatedAt,

        ).toLocaleDateString()}

      </span>

    </button>

  );

}
