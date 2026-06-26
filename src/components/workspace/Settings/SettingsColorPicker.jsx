import "./Settings.css";

export default function SettingsColorPicker({

  label,

  description,

  value,

  onChange,

  disabled = false,

}) {

  function handleChange(event) {

    onChange(

      event.target.value

    );

  }

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

      <div className="settings-color-picker">

        <input

          className="settings-color-input"

          type="color"

          value={value}

          disabled={disabled}

          onChange={handleChange}

        />

        <span className="settings-color-value">

          {value.toUpperCase()}

        </span>

      </div>

    </div>

  );

}
