import "./RecommendationItem.css";

export default function RecommendationItem({

  icon,

  title,

  message,

  priority,

}) {

  return (

    <div

      className={

        `recommendation-item ${priority}`

      }

    >

      <div className="recommendation-icon">

        {icon}

      </div>

      <div className="recommendation-content">

        <h3>

          {title}

        </h3>

        <p>

          {message}

        </p>

      </div>

    </div>

  );

}
