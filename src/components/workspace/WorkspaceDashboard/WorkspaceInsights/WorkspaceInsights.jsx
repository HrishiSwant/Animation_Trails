import "./WorkspaceInsights.css";

import useWorkspaceInsights from "../../../../hooks/dashboard/useWorkspaceInsights";

import InsightItem from "./InsightItem";

export default function WorkspaceInsights() {

  const insights =

    useWorkspaceInsights();

  return (

    <section className="workspace-insights">

      <div className="workspace-insights-header">

        <h2>

          Workspace Insights

        </h2>

        <p>

          Suggestions to improve your workspace.

        </p>

      </div>

      {

        insights.length === 0 ? (

          <div className="workspace-insights-empty">

            <div className="workspace-insights-empty-icon">

              🎉

            </div>

            <h3>

              Workspace looks great!

            </h3>

            <p>

              Your active project is well organized.

              <br />

              There are no suggestions right now.

            </p>

          </div>

        ) : (

          <div className="workspace-insights-list">

            {

              insights.map(

                insight => (

                  <InsightItem

                    key={insight.id}

                    {...insight}

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
