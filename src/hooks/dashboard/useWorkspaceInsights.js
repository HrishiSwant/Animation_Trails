import {

  useMemo,

} from "react";

import useProject from "../project/useProject";

export default function useWorkspaceInsights() {

  const {

    activeProject,

  } = useProject();

  const insights = useMemo(() => {

    if (!activeProject) {

      return [];

    }

    const list = [];

    /*
    ==========================
        DESCRIPTION
    ==========================
    */

    if (!activeProject.description?.trim()) {

      list.push({

        id: "description",

        priority: "warning",

        icon: "📝",

        title: "Missing Description",

        message: "Add a project description.",

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

      list.push({

        id: "tags",

        priority: "tip",

        icon: "🏷",

        title: "No Tags",

        message: "Tags help organize projects.",

      });

    }

    /*
    ==========================
        FAVORITE
    ==========================
    */

    if (!activeProject.favorite) {

      list.push({

        id: "favorite",

        priority: "suggestion",

        icon: "⭐",

        title: "Favorite Project",

        message: "Mark this project as favorite.",

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

      list.push({

        id: "animations",

        priority: "warning",

        icon: "🎬",

        title: "No Animations",

        message: "This project has no animations.",

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

      list.push({

        id: "activity",

        priority: "tip",

        icon: "📅",

        title: "No Activity",

        message: "Start working on this project.",

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

    list.sort(

      (a, b) =>

        priorityOrder[a.priority] -

        priorityOrder[b.priority],

    );

    return list;

  }, [

    activeProject,

  ]);

  return insights;

}
