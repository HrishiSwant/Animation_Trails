import "./ActivityStat.css";

export default function ActivityStat({

  icon,

  label,

  value,

}) {

  return (

    <div className="activity-stat">

      <div className="activity-stat-icon">

        {icon}

      </div>

      <div className="activity-stat-content">

        <h3>

          {value}

        </h3>

        <p>

          {label}

        </p>

      </div>

    </div>

  );

}
