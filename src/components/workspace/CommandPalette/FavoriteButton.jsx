import "./FavoriteButton.css";

export default function FavoriteButton({

  favorite,

  onToggle,

}) {

  return (

    <button

      className="favorite-button"

      onClick={(event) => {

        event.stopPropagation();

        onToggle();

      }}

      title={

        favorite

          ? "Remove Favorite"

          : "Add Favorite"

      }

    >

      {favorite ? "⭐" : "☆"}

    </button>

  );

}
