import "./FavoriteToggle.css";

export default function FavoriteToggle({

  value,

  onChange,

}) {

  return (

    <label className="favorite-toggle">

      <input

        type="checkbox"

        checked={value}

        onChange={event =>

          onChange(

            event.target.checked,

          )

        }

      />

      <span className="favorite-icon">

        ⭐

      </span>

      <span>

        Pin this project

      </span>

    </label>

  );

}
