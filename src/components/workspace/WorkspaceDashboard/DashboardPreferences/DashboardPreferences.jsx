import "./DashboardPreferences.css";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

import PreferenceToggle from "./PreferenceToggle";

export default function DashboardPreferences() {

  const {

    preferences,

    toggleWidget,

    setDensity,

  } = useDashboardPreferences();

  return (

    <section className="dashboard-preferences">

      <div className="dashboard-preferences-header">

        <h2>

          ⚙ Dashboard Layout

        </h2>

        <p>

          Personalize your dashboard.

        </p>

      </div>

      <div className="preferences-card">

        <h3>

          Widget Visibility

        </h3>

        {

          Object.entries(

            preferences.widgets,

          ).map(

            ([id, value]) => (

              <PreferenceToggle

                key={id}

                label={id}

                checked={value}

                onChange={() =>

                  toggleWidget(id)

                }

              />

            ),

          )

        }

        <div className="density">

          <h3>

            Density

          </h3>

          <button

            className={

              preferences.density ===

              "comfortable"

                ? "active"

                : ""

            }

            onClick={() =>

              setDensity(

                "comfortable",

              )

            }

          >

            Comfortable

          </button>

          <button

            className={

              preferences.density ===

              "compact"

                ? "active"

                : ""

            }

            onClick={() =>

              setDensity(

                "compact",

              )

            }

          >

            Compact

          </button>

        </div>

      </div>

    </section>

  );

}
