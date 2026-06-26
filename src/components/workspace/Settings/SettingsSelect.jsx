import "./Settings.css";

export default function SettingsSelect({

  label,

  description,

  value,

  options = [],

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

      <select

        className="settings-select"

        value={value}

        disabled={disabled}

        onChange={(event) =>

          onChange(

            event.target.value

          )

        }

      >

        {

          options.map(

            (option) => (

              <option

                key={option.value}

                value={option.value}

              >

                {option.label}

              </option>

            )

          )

        }

      </select>

    </div>

  );

}
