import useProject from "../project/useProject";

export default function useDashboard() {

  const {

    projects,

    activeProject,

  } = useProject();

  const projectCount =

    projects.length;

  const favoriteCount =

    projects.filter(

      project =>

        project.favorite,

    ).length;

  const animationCount =

    projects.reduce(

      (total, project) =>

        total +

        (

          project.animations?.length ||

          0

        ),

      0,

    );

  const componentCount =

    projects.reduce(

      (total, project) =>

        total +

        (

          project.components?.length ||

          0

        ),

      0,

    );

  /*
  ==========================
      TEMP STORAGE
  ==========================

  This will become a real
  storage calculator in D-4.2.2

  */

  const storage =

    `${(

      JSON.stringify(

        projects,

      ).length /

      1024

    ).toFixed(1)} KB`;

  return {

    overview: [

      {

        id: "projects",

        icon: "📁",

        title: "Projects",

        value:

          projectCount,

        subtitle:

          "Workspace projects",

        color:

          "#2563EB",

      },

      {

        id: "favorites",

        icon: "⭐",

        title: "Favorites",

        value:

          favoriteCount,

        subtitle:

          "Pinned projects",

        color:

          "#F59E0B",

      },

      {

        id: "storage",

        icon: "💾",

        title: "Storage",

        value:

          storage,

        subtitle:

          "Workspace usage",

        color:

          "#10B981",

      },

      {

        id: "animations",

        icon: "🎬",

        title: "Animations",

        value:

          animationCount,

        subtitle:

          "Across projects",

        color:

          "#8B5CF6",

      },

      {

        id: "components",

        icon: "🧩",

        title: "Components",

        value:

          componentCount,

        subtitle:

          "Reusable components",

        color:

          "#EC4899",

      },

    ],

    activeProject,

  };

}
