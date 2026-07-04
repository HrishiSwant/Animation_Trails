import "./ProductivityRecommendations.css";

import useProject from "../../../../hooks/project/useProject";

import RecommendationItem from "./RecommendationItem";

export default function ProductivityRecommendations() {

  const {

    activeProject,

  } = useProject();

  if (!activeProject) {

    return null;

  }

  const recommendations = [];

  if (!activeProject.description?.trim()) {

    recommendations.push({

      icon: "📝",

      title: "Add a project description",

      message:

        "Descriptions help document your project and make it easier to understand later.",

      priority: "high",

    });

  }

  if ((activeProject.animations?.length || 0) === 0) {

    recommendations.push({

      icon: "🎬",

      title: "Create your first animation",

      message:

        "Animations are the core of your project. Add one to get started.",

      priority: "high",

    });

  }

  if ((activeProject.tags?.length || 0) === 0) {

    recommendations.push({

      icon: "🏷",

      title: "Add project tags",

      message:

        "Tags improve searching, organization and filtering.",

      priority: "medium",

    });

  }

  if (!activeProject.favorite) {

    recommendations.push({

      icon: "⭐",

      title: "Mark as Favorite",

      message:

        "Favorite projects appear in your dashboard for faster access.",

      priority: "medium",

    });

  }

  if ((activeProject.activities?.length || 0) < 5) {

    recommendations.push({

      icon: "🚀",

      title: "Keep building",

      message:

        "Continue working on this project to increase productivity and activity history.",

      priority: "low",

    });

  }

  return (

    <section className="productivity-recommendations">

      <div className="productivity-recommendations-header">

        <h2>

          💡 Productivity Recommendations

        </h2>

        <p>

          Personalized suggestions for improving your workspace.

        </p>

      </div>

      {

        recommendations.length === 0 ? (

          <div className="recommendation-empty">

            🎉 This project looks fantastic! No recommendations at the moment.

          </div>

        ) : (

          <div className="recommendation-list">

            {

              recommendations.map(

                (item, index) => (

                  <RecommendationItem

                    key={index}

                    {...item}

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
