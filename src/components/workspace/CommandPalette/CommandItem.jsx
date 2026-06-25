import "./CommandItem.css";

import FavoriteButton from "./FavoriteButton";

import useFavoriteCommands from "../../../hooks/workspace/useFavoriteCommands";

export default function CommandItem({

  command,

  selected,

  onClick,

}) {

  const {

    isFavorite,

    toggleFavorite,

  } = useFavoriteCommands();

  return (

    <div

      className={

        selected

          ? "command-item selected"

          : "command-item"

      }

      onClick={onClick}

    >

      <FavoriteButton

        favorite={

          isFavorite(

            command.id

          )

        }

        onToggle={() =>

          toggleFavorite(

            command.id

          )

        }

      />

      <div className="command-icon">

        {command.icon}

      </div>

      <div className="command-details">

        <h4>

          {command.title}

        </h4>

        <span>

          {command.category}

        </span>

      </div>

    </div>

  );

}
