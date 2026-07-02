import AnimatedCounter from "./AnimatedCounter";
import "../ProjectDashboard.css";

export default function StatisticCard({

  icon,

  title,

  value,

}) {

  return (

    <div className="stat-card">

      <div className="stat-icon">

        {icon}

      </div>

      <div className="stat-content">

        <h4>

          {title}

        </h4>

       <p>

  {

    typeof value ===

    "number"

      ? (

        <AnimatedCounter

          value={value}

        />

      )

      : value

  }

</p>

      </div>

    </div>

  );

}
