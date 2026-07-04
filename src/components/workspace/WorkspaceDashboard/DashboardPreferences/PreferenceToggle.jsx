import "./PreferenceToggle.css";

export default function PreferenceToggle({

  label,

  checked,

  onChange,

}) {

  return (

    <label className="preference-toggle">

      <span>

        {label}

      </span>

      <input

        type="checkbox"

        checked={checked}

        onChange={onChange}

      />

    </label>

  );

}
