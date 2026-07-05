import "./RecentWidgets.css";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

import RecentWidgetCard from "./RecentWidgetCard";

const LABELS = {

  overview: "Workspace Overview",

  health: "Workspace Health",

  insights: "Workspace Insights",

  favorites: "Favorite Projects",

  recent: "Recent Projects",

  continueWorking: "Continue Working",

  todaysActivity: "Today's Activity",

  productivity: "Productivity Score",

  weekly: "Weekly Activity",

  streak: "Workspace Streak",

  summary: "Dashboard Summary",

  recommendations: "Recommendations",

};

export default function RecentWidgets() {

  const {

    preferences,

  } = useDashboardPreferences();

  const recent =

    preferences.recentWidgets || [];

  return (

    <section className="recent-widgets">

      <div className="recent-widgets-header">

        <h2>

          🕒 Recently Used Widgets

        </h2>

        <p>

          Your latest dashboard activity.

        </p>

      </div>

      {

        recent.length === 0 ? (

          <div className="recent-widgets-empty">

            No widgets used yet.

          </div>

        ) : (

          <div className="recent-widgets-grid">

            {

              recent.map(id => (

                <RecentWidgetCard

                  key={id}

                  title={LABELS[id]}

                />

              ))

            }

          </div>

        )

      }

    </section>

  );

}
