import "./ProductivityScore.css";

import useProject from "../../../../hooks/project/useProject";

import ScoreCheck from "./ScoreCheck";

export default function ProductivityScore() {

  const {

    activeProject,

  } = useProject();

  if (!activeProject) {

    return null;

  }

  let score = 0;

  const checks = [

    {

      label: "Description",

      passed:

        !!activeProject.description?.trim(),

      points: 15,

    },

    {

      label: "Favorite",

      passed:

        !!activeProject.favorite,

      points: 10,

    },

    {

      label: "Tags",

      passed:

        (activeProject.tags?.length || 0) > 0,

      points: 15,

    },

    {

      label: "Animations",

      passed:

        (activeProject.animations?.length || 0) > 0,

      points: 20,

    },

    {

      label: "Components",

      passed:

        (activeProject.components?.length || 0) > 0,

      points: 20,

    },

    {

      label: "Activity Today",

      passed:

        (activeProject.activities?.length || 0) > 0,

      points: 20,

    },

  ];

  checks.forEach(

    item => {

      if (

        item.passed

      ) {

        score +=

          item.points;

      }

    },

  );

  let status =

    "Needs Work";

  if (score >= 80) {

    status =

      "Excellent";

  }

  else if (score >= 60) {

    status =

      "Good";

  }

  else if (score >= 40) {

    status =

      "Average";

  }

  return (

    <section className="productivity-score">

      <div className="productivity-header">

        <h2>

          🔥 Productivity Score

        </h2>

        <p>

          Current progress of this workspace.

        </p>

      </div>

      <div className="productivity-card">

        <div className="productivity-score-value">

          {score}%

        </div>

        <div className="productivity-progress">

          <div

            className="productivity-progress-fill"

            style={{

              width:

                `${score}%`,

            }}

          />

        </div>

        <div className="productivity-status">

          {status}

        </div>

        <div className="productivity-checks">

          {

            checks.map(

              check => (

                <ScoreCheck

                  key={check.label}

                  {...check}

                />

              ),

            )

          }

        </div>

      </div>

    </section>

  );

}
