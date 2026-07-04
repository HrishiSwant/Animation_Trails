import "./InsightItem.css";

export default function InsightItem({

  icon,

  title,

  message,

  priority,

}) {

  return (

    <div

      className={`insight-item ${priority}`}

    >

      <div className="insight-icon">

        {icon}

      </div>

      <div className="insight-content">

        <h4>

          {title}

        </h4>

        <p>

          {message}

        </p>

      </div>

    </div>

  );

}
