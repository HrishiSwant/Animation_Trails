import "./WidgetSection.css";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

export default function WidgetSection({

  id,

  title,

  children,

}) {

  const {

    preferences,

    toggleCollapsedWidget,

  } = useDashboardPreferences();

  const collapsed =

    preferences.collapsedWidgets?.[id];

  return (

    <section className="widget-section">

      <button

        className="widget-section-header"

        onClick={() =>

          toggleCollapsedWidget(id)

        }

      >

        <span>

          {

            collapsed

              ? "▶"

              : "▼"

          }

        </span>

        <h2>

          {title}

        </h2>

      </button>

      {

        !collapsed && (

          <div className="widget-section-body">

            {children}

          </div>

        )

      }

    </section>

  );

}
