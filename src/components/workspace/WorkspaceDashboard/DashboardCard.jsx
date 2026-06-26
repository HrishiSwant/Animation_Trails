import "./DashboardCard.css";

export default function DashboardCard({

  icon,

  title,

  value,

  subtitle,

  color,

}) {

  return (

    <div

      className="dashboard-card"

      style={{

        borderTop:

          `4px solid ${color}`,

      }}

    >

      <div className="dashboard-card-icon">

        {icon}

      </div>

      <div className="dashboard-card-body">

        <h3>

          {title}

        </h3>

        <h2>

          {value}

        </h2>

        <p>

          {subtitle}

        </p>

      </div>

    </div>

  );

}
