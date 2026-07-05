import "./WidgetSection.css";

import {
  useEffect,
} from "react";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

export default function WidgetSection({

  id,

  title,

  children,

}) {

  const {

    preferences,

    toggleCollapsedWidget,

    registerWidgetUsage,

  } = useDashboardPreferences();

  const collapsed =

    preferences.collapsedWidgets?.[id] || false;

  useEffect(() => {

    if (!collapsed) {

      registerWidgetUsage(id);

    }

  }, [

    collapsed,

    id,

    registerWidgetUsage,

  ]);

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
