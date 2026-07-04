import "./WorkspaceStreak.css";

import useProject from "../../../../hooks/project/useProject";

function calculateStreak(activities) {

  if (!activities.length) {

    return {

      current: 0,

      best: 0,

      last: "Never",

    };

  }

  const uniqueDays = [

    ...new Set(

      activities.map(activity =>

        new Date(

          activity.createdAt,

        ).toDateString(),

      ),

    ),

  ]

    .map(day =>

      new Date(day),

    )

    .sort(

      (a, b) =>

        b - a,

    );

  let current = 0;

  let best = 0;

  let streak = 1;

  const today =

    new Date();

  const firstDiff =

    Math.floor(

      (today -

        uniqueDays[0]) /

        86400000,

    );

  if (

    firstDiff <= 1

  ) {

    current = 1;

    for (

      let i = 1;

      i < uniqueDays.length;

      i++

    ) {

      const diff =

        Math.floor(

          (uniqueDays[i - 1] -

            uniqueDays[i]) /

            86400000,

        );

      if (

        diff === 1

      ) {

        current++;

      }

      else {

        break;

      }

    }

  }

  for (

    let i = 1;

    i < uniqueDays.length;

    i++

  ) {

    const diff =

      Math.floor(

        (uniqueDays[i - 1] -

          uniqueDays[i]) /

          86400000,

      );

    if (

      diff === 1

    ) {

      streak++;

    }

    else {

      best =

        Math.max(

          best,

          streak,

        );

      streak = 1;

    }

  }

  best =

    Math.max(

      best,

      streak,

    );

  return {

    current,

    best,

    last:

      uniqueDays[0].toLocaleDateString(),

  };

}

export default function WorkspaceStreak() {

  const {

    activeProject,

  } = useProject();

  if (!activeProject) {

    return null;

  }

  const streak =

    calculateStreak(

      activeProject.activities ||

        [],

    );

  return (

    <section className="workspace-streak">

      <div className="workspace-streak-header">

        <h2>

          ⏱ Workspace Streak

        </h2>

        <p>

          Keep your momentum going.

        </p>

      </div>

      <div className="workspace-streak-grid">

        <div className="streak-card">

          <span className="streak-icon">

            🔥

          </span>

          <h3>

            {streak.current}

          </h3>

          <p>

            Current Streak

          </p>

        </div>

        <div className="streak-card">

          <span className="streak-icon">

            🏆

          </span>

          <h3>

            {streak.best}

          </h3>

          <p>

            Best Streak

          </p>

        </div>

        <div className="streak-card">

          <span className="streak-icon">

            📅

          </span>

          <h3>

            {streak.last}

          </h3>

          <p>

            Last Activity

          </p>

        </div>

      </div>

    </section>

  );

}
