import "../ProjectDashboard.css";

import DashboardWidget from "./DashboardWidget";
import StatisticCard from "./StatisticCard";

function formatLastOpened(value) {

  if (!value) {

    return "Never";

  }

  const date =

    new Date(value);

  const today =

    new Date();

  const isToday =

    date.toDateString() ===

    today.toDateString();

  if (isToday) {

    return "Today";

  }

  return date.toLocaleDateString(

    undefined,

    {

      month: "short",

      day: "numeric",

    },

  );

}

export default function StatisticsGrid({

  project,

}) {

  if (!project) {

    return null;

  }

  const animationCount =

    project.animations?.length ||

    0;

  const componentCount =

    project.components?.length ||

    0;

  const tagCount =

    project.tags?.length ||

    0;

  return (

    <DashboardWidget

      title="Statistics"

      subtitle="Live project overview"

      icon="📊"

      variant="accent"

      className="widget-large"

    >

      <div className="statistics-grid">

        <StatisticCard

          index={0}

          icon="🎬"

          title="Animations"

          value={animationCount}

        />

        <StatisticCard

          index={1}

          icon="🧩"

          title="Components"

          value={componentCount}

        />

        <StatisticCard

          index={2}

          icon="🏷"

          title="Tags"

          value={tagCount}

        />

        <StatisticCard

          index={3}

          icon="🕒"

          title="Last Opened"

          value={

            formatLastOpened(

              project.lastOpened,

            )

          }

        />

      </div>

    </DashboardWidget>

  );

}
