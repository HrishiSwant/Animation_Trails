import "../ProjectDashboard.css";

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

    <section className="statistics-grid">

      <StatisticCard

        icon="🎬"

        title="Animations"

        value={

          animationCount

        }

      />

      <StatisticCard

        icon="🧩"

        title="Components"

        value={

          componentCount

        }

      />

      <StatisticCard

        icon="🏷"

        title="Tags"

        value={

          tagCount

        }

      />

      <StatisticCard

        icon="🕒"

        title="Last Opened"

        value={

          formatLastOpened(

            project.lastOpened,

          )

        }

      />

    </section>

  );

}
