import "./WeeklyActivity.css";

import useProject from "../../../../hooks/project/useProject";

import ActivityBar from "./ActivityBar";

export default function WeeklyActivity() {

  const {

    activeProject,

  } = useProject();

  if (!activeProject) {

    return null;

  }

  const activities =

    activeProject.activities || [];

  const days = [

    "Sun",

    "Mon",

    "Tue",

    "Wed",

    "Thu",

    "Fri",

    "Sat",

  ];

  const counts =

    new Array(7).fill(0);

  const today =

    new Date();

  activities.forEach(

    activity => {

      const date =

        new Date(

          activity.createdAt,

        );

      const diff =

        Math.floor(

          (today - date) /

          86400000,

        );

      if (

        diff >= 0 &&

        diff < 7

      ) {

        counts[

          date.getDay()

        ]++;

      }

    },

  );

  const data =

    days.map(

      (day, index) => ({

        day,

        value:

          counts[index],

      }),

    );

  const max =

    Math.max(

      ...counts,

      1,

    );

  return (

    <section className="weekly-activity">

      <div className="weekly-header">

        <h2>

          📈 Weekly Activity

        </h2>

        <p>

          Activity during the last seven days.

        </p>

      </div>

      <div className="weekly-list">

        {

          data.map(

            item => (

              <ActivityBar

                key={item.day}

                day={item.day}

                value={item.value}

                max={max}

              />

            ),

          )

        }

      </div>

    </section>

  );

}
