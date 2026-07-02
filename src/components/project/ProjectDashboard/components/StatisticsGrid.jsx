import "../ProjectDashboard.css";

import StatisticCard from "./StatisticCard";

export default function StatisticsGrid({

  project,

}) {

  if (!project) {

    return null;

  }

  return (

    <section className="statistics-grid">

      <StatisticCard

        icon="🎬"

        title="Animations"

        value="0"

      />

      <StatisticCard

        icon="🧩"

        title="Components"

        value="0"

      />

      <StatisticCard

        icon="🏷"

        title="Tags"

        value={

          project.tags?.length || 0

        }

      />

      <StatisticCard

        icon="🕒"

        title="Last Opened"

        value="Today"

      />

    </section>

  );

}
