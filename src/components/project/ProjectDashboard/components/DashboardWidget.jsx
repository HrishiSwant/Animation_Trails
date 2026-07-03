import "./DashboardWidget.css";

export default function DashboardWidget({

  title,

  subtitle,

  icon,

  actions,

  footer,

  children,

  loading = false,

  empty = false,

  emptyText = "Nothing here yet.",

}) {

  return (

    <section className="dashboard-widget">

      <header className="dashboard-widget-header">

        <div className="dashboard-widget-title">

          {

            icon && (

              <span className="dashboard-widget-icon">

                {icon}

              </span>

            )

          }

          <div>

            <h3>

              {title}

            </h3>

            {

              subtitle && (

                <p>

                  {subtitle}

                </p>

              )

            }

          </div>

        </div>

        {

          actions && (

            <div className="dashboard-widget-actions">

              {actions}

            </div>

          )

        }

      </header>

      <div className="dashboard-widget-body">

        {

          loading ? (

            <div className="dashboard-widget-loading">

              Loading...

            </div>

          ) : empty ? (

            <div className="dashboard-widget-empty">

              {emptyText}

            </div>

          ) : (

            children

          )

        }

      </div>

      {

        footer && (

          <footer className="dashboard-widget-footer">

            {footer}

          </footer>

        )

      }

    </section>

  );

}
