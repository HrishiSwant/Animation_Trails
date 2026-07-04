import "./DashboardSummary.css";

import useDashboard from "../../../../hooks/dashboard/useDashboard";

import SummaryItem from "./SummaryItem";

export default function DashboardSummary() {

  const dashboard =

    useDashboard();

  const health =

    dashboard.health?.score || 0;

  const productivity =

    Math.min(

      health + 10,

      100,

    );

  return (

    <section className="dashboard-summary">

      <div className="dashboard-summary-header">

        <h2>

          📊 Dashboard Summary

        </h2>

        <p>

          Workspace snapshot.

        </p>

      </div>

      <div className="dashboard-summary-list">

        <SummaryItem

          icon="📁"

          label="Projects"

          value={

            dashboard.overview.find(

              item =>

                item.id ===

                "projects",

            )?.value || 0

          }

        />

        <SummaryItem

          icon="🎬"

          label="Animations"

          value={

            dashboard.overview.find(

              item =>

                item.id ===

                "animations",

            )?.value || 0

          }

        />

        <SummaryItem

          icon="🧩"

          label="Components"

          value={

            dashboard.overview.find(

              item =>

                item.id ===

                "components",

            )?.value || 0

          }

        />

        <SummaryItem

          icon="⭐"

          label="Favorites"

          value={

            dashboard.overview.find(

              item =>

                item.id ===

                "favorites",

            )?.value || 0

          }

        />

        <SummaryItem

          icon="💾"

          label="Storage"

          value={

            dashboard.overview.find(

              item =>

                item.id ===

                "storage",

            )?.value || "0 B"

          }

        />

        <SummaryItem

          icon="💚"

          label="Workspace Health"

          value={`${health}%`}

        />

        <SummaryItem

          icon="🔥"

          label="Productivity"

          value={`${productivity}%`}

        />

      </div>

    </section>

  );

}
