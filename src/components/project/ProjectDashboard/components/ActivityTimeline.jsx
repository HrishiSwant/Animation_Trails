import "../ProjectDashboard.css";

import ActivityItem from "./ActivityItem";

export default function ActivityTimeline({

  activities = [],

}) {

  return (

    <section className="activity-timeline">

      <div className="activity-header">

        <h2>

          Recent Activity

        </h2>

      </div>

      {

        activities.length === 0 ? (

          <div className="activity-empty">

            <div className="activity-empty-icon">

              📭

            </div>

            <h3>

              No activity yet

            </h3>

            <p>

              Start working on your project to build its history.

            </p>

          </div>

        ) : (

          activities.map(

            activity => (

              <ActivityItem

                key={activity.id}

                icon={activity.icon}

                title={activity.title}

                description={activity.description}

                time={activity.time}

              />

            ),

          )

        )

      }

    </section>

  );

}
