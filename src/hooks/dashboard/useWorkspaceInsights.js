import useProject from "../project/useProject";

export default function useWorkspaceInsights() {

  const {

    activeProject,

  } = useProject();

  if (!activeProject) {

    return [];

  }

  const insights = [];

  /*
  ==========================
      DESCRIPTION
  ==========================
  */

  if (!activeProject.description?.trim()) {

    insights.push({

      id: "description",

      priority: "warning",

      icon: "📝",

      title: "Missing Description",

      message:
        "Add a project description.",

    });

  }

  /*
  ==========================
      TAGS
  ==========================
  */

  if (

    (activeProject.tags?.length || 0) === 0

  ) {

    insights.push({

      id: "tags",

      priority: "tip",

      icon: "🏷",

      title: "No Tags",

      message:
        "Tags help organize projects.",

    });

  }

  /*
  ==========================
      FAVORITE
  ==========================
  */

  if (!activeProject.favorite) {

    insights.push({

      id: "favorite",

      priority: "suggestion",

      icon: "⭐",

      title: "Favorite Project",

      message:
        "Mark this project as favorite.",

    });

  }

  /*
  ==========================
      ANIMATIONS
  ==========================
  */

  if (

    (activeProject.animations?.length || 0) === 0

  ) {

    insights.push({

      id: "animations",

      priority: "warning",

      icon: "🎬",

      title: "No Animations",

      message:
        "This project has no animations.",

    });

  }

  /*
  ==========================
      ACTIVITY
  ==========================
  */

  if (

    (activeProject.activities?.length || 0) === 0

  ) {

    insights.push({

      id: "activity",

      priority: "tip",

      icon: "📅",

      title: "No Activity",

      message:
        "Start working on this project.",

    });

  }

  /*
==========================
    PRIORITY SORT
==========================
*/

const priorityOrder = {

  critical: 0,

  warning: 1,

  suggestion: 2,

  tip: 3,

};

insights.sort(

  (a, b) =>

    priorityOrder[a.priority] -

    priorityOrder[b.priority],

);

  return insights;

}
