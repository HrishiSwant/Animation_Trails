import "./ActivityBar.css";

export default function ActivityBar({

  day,

  value,

  max,

}) {

  const width =

    max === 0

      ? 0

      : (value / max) * 100;

  return (

    <div className="activity-bar">

      <span className="activity-day">

        {day}

      </span>

      <div className="activity-track">

        <div

          className="activity-fill"

          style={{

            width: `${width}%`,

          }}

        />

      </div>

      <span className="activity-value">

        {value}

      </span>

    </div>

  );

}
