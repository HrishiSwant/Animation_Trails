import {

  useMemo,

  useState,

} from "react";

import "./ProjectDashboard.css";

import DashboardWidget from "./DashboardWidget";
import ActivityItem from "./ActivityItem";

function groupActivities(

  activities,

) {

  const now =

    new Date();

  const groups = {

    Today: [],

    Yesterday: [],

    "Last 7 Days": [],

    Older: [],

  };

  activities.forEach(

    activity => {

      const date =

        new Date(

          activity.createdAt,

        );

      const diff =

        Math.floor(

          (

            now -

            date

          ) /

            86400000,

        );

      if (diff === 0) {

        groups.Today.push(

          activity,

        );

      }

      else if (

        diff === 1

      ) {

        groups.Yesterday.push(

          activity,

        );

      }

      else if (

        diff < 7

      ) {

        groups["Last 7 Days"]

          .push(

            activity,

          );

      }

      else {

        groups.Older.push(

          activity,

        );

      }

    },

  );

  return Object.fromEntries(

    Object.entries(

      groups,

    ).filter(

      ([, items]) =>

        items.length > 0,

    ),

  );

}

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

    <DashboardWidget

      title="Recent Activity"

      subtitle="Everything happening in this project"

      icon="🕒"

      variant="default"

      className="widget-full"

    >

      <div className="activity-header">

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

              Object.entries(

                groupActivities(

                  filteredActivities,

                ),

              ).map(

                ([group, items]) => (

                  <div

                    key={group}

                    className="activity-group"

                  >

                    <div className="activity-group-title">

                      {group}

                    </div>

                    {

                      items.map(

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

                ),

              )

            }

          </div>

        )

      }

    </DashboardWidget>

  );

}
