import {

  useMemo,

  useState,

} from "react";

import "../ProjectDashboard.css";

import ActivityItem from "./ActivityItem";

export default function ActivityTimeline({

  activities = [],

}) {

  const [

    filter,

    setFilter,

  ] = useState("all");

  const [

    search,

    setSearch,

  ] = useState("");

  const filteredActivities =

    useMemo(() => {

      return [...activities]

        .sort(

          (a, b) =>

            b.createdAt -

            a.createdAt,

        )

        .filter(activity => {

          const query =

            search

              .trim()

              .toLowerCase();

          const matchesSearch =

            activity.title

              .toLowerCase()

              .includes(query) ||

            activity.description

              .toLowerCase()

              .includes(query);

          if (

            !matchesSearch

          ) {

            return false;

          }

          switch (filter) {

            case "project":

              return activity.type.startsWith(

                "project_",

              );

            case "settings":

              return (

                activity.type ===

                "project_updated"

              );

            default:

              return true;

          }

        });

    }, [

      activities,

      filter,

      search,

    ]);

  return (

    <section className="activity-timeline">

      <div className="activity-header">

        <h2>

          Recent Activity

        </h2>

        <span className="activity-count">

          {

            filteredActivities.length

          }

        </span>

      </div>

      <div className="activity-toolbar">

        <div className="activity-filters">

          <button

            className={

              filter === "all"

                ? "active"

                : ""

            }

            onClick={() =>

              setFilter(

                "all",

              )

            }

          >

            All

          </button>

          <button

            className={

              filter === "project"

                ? "active"

                : ""

            }

            onClick={() =>

              setFilter(

                "project",

              )

            }

          >

            Project

          </button>

          <button

            className={

              filter === "settings"

                ? "active"

                : ""

            }

            onClick={() =>

              setFilter(

                "settings",

              )

            }

          >

            Settings

          </button>

        </div>

        <input

          type="text"

          placeholder="Search activity..."

          value={search}

          onChange={event =>

            setSearch(

              event.target.value,

            )

          }

        />

      </div>

      {

        filteredActivities.length === 0 ? (

          <div className="activity-empty">

            <div className="activity-empty-icon">

              📭

            </div>

            <h3>

              No activity found

            </h3>

            <p>

              Try another filter or search.

            </p>

          </div>

        ) : (

          <div className="activity-list">

            {

              filteredActivities.map(

                activity => (

                  <ActivityItem

                    key={activity.id}

                    {...activity}

                    time={

                      activity.createdAt

                    }

                  />

                ),

              )

            }

          </div>

        )

      }

    </section>

  );

}
