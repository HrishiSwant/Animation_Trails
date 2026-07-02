import "./ColorPicker.css";

const colors = [

  "#6b7280",

  "#3b82f6",

  "#22c55e",

  "#8b5cf6",

  "#f97316",

  "#ef4444",

  "#06b6d4",

  "#f59e0b",

  "#ec4899",

  "#14b8a6",

];

export default function ColorPicker({

  value,

  onChange,

}) {

  return (

    <div className="color-picker">

      {

        colors.map(color => (

          <button

  key={color}

  type="button"

  className={

    value === color

      ? "color-picker-item active"

      : "color-picker-item"

  }

  style={{

    background: color,

  }}

  onClick={() =>

    onChange(color)

  }

>

  {

    value === color && (

      <span className="color-check">

        ✓

      </span>

    )

  }

</button>



        ))

      }

    </div>

  );

}
