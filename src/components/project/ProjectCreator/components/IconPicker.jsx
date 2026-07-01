import "./IconPicker.css";

const icons = [

  "📁",
  "🎨",
  "💻",
  "🎬",
  "📽️",
  "📦",
  "🚀",
  "⭐",
  "📝",
  "🎵",
  "📱",
  "🌐",

];

export default function IconPicker({

  value,

  onChange,

}) {

  return (

    <div className="icon-picker">

      {

        icons.map(icon => (

          <button

  key={icon}

  type="button"

  className={

    value === icon

      ? "icon-picker-item active"

      : "icon-picker-item"

  }

  onClick={() =>

    onChange(icon)

  }

>

  <span className="icon-value">

    {icon}

  </span>

</button>

          

        ))

      }

    </div>

  );

}
