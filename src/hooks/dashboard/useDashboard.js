import useWorkspaceOverview from "./useWorkspaceOverview";
import useWorkspaceStats from "./useWorkspaceStats";

export default function useDashboard() {

  /*
  ==========================
      OVERVIEW
  ==========================
  */

  const {

    overview,

    stats,

  } = useWorkspaceOverview();

  /*
  ==========================
      QUICK ACTIONS
  ==========================
  */

  const quickActions = [

    {

      id: "notes",

      icon: "📝",

      title: "New Note",

      tool: "notes",

    },

    {

      id: "tasks",

      icon: "✅",

      title: "New Task",

      tool: "tasks",

    },

    {

      id: "sketch",

      icon: "🎨",

      title: "Open Sketch",

      tool: "sketch",

    },

    {

      id: "assets",

      icon: "📁",

      title: "Upload Asset",

      tool: "assets",

    },

    {

      id: "export",

      icon: "📤",

      title: "Export Workspace",

      tool: "export",

    },

  ];

  /*
  ==========================
      SUMMARY
  ==========================
  */

  const summary = {

    totalModules: 5,

    workspaceReady:

      stats.notes.count > 0 ||

      stats.tasks.total > 0 ||

      stats.assets.count > 0 ||

      stats.sketch.exists,

    storage:

      stats.storage,

  };

  /*
  ==========================
      RETURN
  ==========================
  */

  return {

    overview,

    stats,

    quickActions,

    summary,

  };

}
