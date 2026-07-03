import "../ProjectDashboard.css";

function formatTime(

  value,

) {

  return new Date(

    value,

  ).toLocaleString(

    undefined,

    {

      dateStyle:

        "medium",

      timeStyle:

        "short",

    },

  );

}

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

        {

          description && (

            <p>

              {description}

            </p>

          )

        }

        <span>

          {

            formatTime(

              time,

            )

          }

        </span>

      </div>

    </div>

  );

}
