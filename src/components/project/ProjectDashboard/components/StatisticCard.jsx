import "./ProjectDashboard.css";

import AnimatedCounter from "./AnimatedCounter";

export default function StatisticCard({

  icon,

  title,

  value,

  index = 0,

}) {

  return (

    <div

      className="stat-card"

      style={{

        animationDelay:

          `${index * 80}ms`,

      }}

    >

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
