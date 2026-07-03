import "../ProjectDashboard.css";

export default function ActivityItem({

  icon,

  title,

  description,

  time,

}) {

  return (

    <div className="activity-item">

      <div className="activity-line" />

      <div className="activity-icon">

        {icon}

      </div>

      <div className="activity-content">

        <h4>

          {title}

        </h4>

        <p>

          {description}

        </p>

        <span>

          {time}

        </span>

      </div>

    </div>

  );

}
