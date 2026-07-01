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

                ? "icon-button active"

                : "icon-button"

            }

            onClick={() =>

              onChange(icon)

            }

          >

            {icon}

          </button>

        ))

      }

    </div>

  );

}
