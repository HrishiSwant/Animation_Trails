import "./Settings.css";

export default function SettingsInput({

  label,

  description,

  value,

  type = "text",

  placeholder = "",

  min,

  max,

  step,

  disabled = false,

  onChange,

}) {

  function handleChange(event) {

    let newValue = event.target.value;

    if (type === "number") {

      newValue = Number(newValue);

    }

    onChange(newValue);

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

      <input

        className="settings-input"

        type={type}

        value={value}

        placeholder={placeholder}

        min={min}

        max={max}

        step={step}

        disabled={disabled}

        onChange={handleChange}

      />

    </div>

  );

}
