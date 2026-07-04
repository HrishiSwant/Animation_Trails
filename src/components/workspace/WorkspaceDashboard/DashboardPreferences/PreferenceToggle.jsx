import "./PreferenceToggle.css";

export default function PreferenceToggle({

  id,

  label,

  checked,

  favorite,

  onChange,

  onFavorite,

}) {

  return (

    <div className="preference-toggle">

      <div className="preference-toggle-left">

        <button

          type="button"

          className={

            favorite

              ? "favorite-toggle active"

              : "favorite-toggle"

          }

          onClick={() =>

            onFavorite(id)

          }

          title={

            favorite

              ? "Remove from Favorite Widgets"

              : "Add to Favorite Widgets"

          }

        >

          ⭐

        </button>

        <span>

          {label}

        </span>

      </div>

      <input

        type="checkbox"

        checked={checked}

        onChange={onChange}

      />

    </div>

  );

}
