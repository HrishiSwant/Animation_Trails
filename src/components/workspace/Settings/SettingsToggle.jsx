import "./Settings.css";

export default function SettingsToggle({

  label,

  description,

  checked,

  onChange,

  disabled = false,

}) {

  return (

    <div className="settings-control">

      <div className="settings-control-info">

        <h4>

          {label}

        </h4>

        {

          description && (

            <p>

              {description}

            </p>

          )

        }

      </div>

      <label className="settings-switch">

        <input

          type="checkbox"

          checked={checked}

          disabled={disabled}

          onChange={(event) =>

            onChange(

              event.target.checked

            )

          }

        />

        <span className="settings-slider" />

      </label>

    </div>

  );

}
