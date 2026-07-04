import "./TodaysActivity.css";

import useProject from "../../../../hooks/project/useProject";

import ActivityStat from "./ActivityStat";

export default function TodaysActivity() {

  const {

    activeProject,

  } = useProject();

  const activities =

    activeProject?.activities || [];

  const today =

    new Date();

  const todayActivities =

    activities.filter(activity => {

      const date =

        new Date(

          activity.createdAt,

        );

      return (

        date.toDateString() ===

        today.toDateString()

      );

    });

  const opened =

    todayActivities.filter(

      activity =>

        activity.type ===

        "project_opened",

    ).length;

  const updated =

    todayActivities.filter(

      activity =>

        activity.type ===

        "project_updated",

    ).length;

  const renamed =

    todayActivities.filter(

      activity =>

        activity.type ===

        "project_renamed",

    ).length;

  const total =

    todayActivities.length;

  return (

    <section className="todays-activity">

      <div className="todays-activity-header">

        <h2>

          📅 Today's Activity

        </h2>

        <p>

          Your productivity today.

        </p>

      </div>

      <div className="todays-activity-grid">

        <ActivityStat

          icon="📂"

          label="Projects Opened"

          value={opened}

        />

        <ActivityStat

          icon="⚙️"

          label="Updates"

          value={updated}

        />

        <ActivityStat

          icon="✏️"

          label="Renamed"

          value={renamed}

        />

        <ActivityStat

          icon="🔥"

          label="Total Activities"

          value={total}

        />

      </div>

    </section>

  );

}
