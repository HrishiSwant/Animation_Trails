import "./DashboardOverview.css";

import DashboardCard from "./DashboardCard";

export default function DashboardOverview({

  overview,

}) {

  return (

    <div className="dashboard-overview">

      <div className="dashboard-overview-header">

        <h2>

          Workspace Overview

        </h2>

        <p>

          Live statistics from your workspace.

        </p>

      </div>

      <div className="dashboard-overview-grid">

        {overview.map(card => (

          <DashboardCard

            key={card.id}

            icon={card.icon}

            title={card.title}

            value={card.value}

            subtitle={card.subtitle}

            color={card.color}

          />

        ))}

      </div>

    </div>

  );

}
