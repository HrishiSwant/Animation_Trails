import { useMemo } from "react";

import useWorkspaceStats from "./useWorkspaceStats";

export default function useWorkspaceOverview() {

  const stats =
    useWorkspaceStats();

  const overview =
    useMemo(() => {

      return [

        {

          id: "notes",

          icon: "📝",

          title: "Notes",

          value:
            `${stats.notes.count}`,

          subtitle:

            stats.notes.count === 1

              ? "Note"

              : "Notes",

          color: "#4F46E5",

        },

        {

          id: "tasks",

          icon: "✅",

          title: "Tasks",

          value:
            `${stats.tasks.total}`,

          subtitle:
            `${stats.tasks.completed} Completed`,

          color: "#16A34A",

        },

        {

          id: "assets",

          icon: "📁",

          title: "Assets",

          value:
            `${stats.assets.count}`,

          subtitle:
            `${stats.assets.favorites} Favorites`,

          color: "#EA580C",

        },

        {

          id: "sketch",

          icon: "🎨",

          title: "Sketch",

          value:

            stats.sketch.exists

              ? "Saved"

              : "Empty",

          subtitle:

            stats.sketch.exists

              ? "Workspace Ready"

              : "No Sketch Yet",

          color: "#DB2777",

        },

        {

          id: "storage",

          icon: "💾",

          title: "Storage",

          value:
            `${stats.storage.kb} KB`,

          subtitle:
            `${stats.storage.mb} MB`,

          color: "#0891B2",

        },

      ];

    }, [

      stats,

    ]);

  return {

    overview,

    stats,

  };

}
