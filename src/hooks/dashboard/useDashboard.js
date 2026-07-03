import useProject from "../project/useProject";

function calculateStorage(projects) {

  let bytes = 0;

  projects.forEach(project => {

    bytes += JSON.stringify(project).length;

    bytes += (project.animations?.length || 0) * 512;
    bytes += (project.components?.length || 0) * 384;
    bytes += (project.tags?.length || 0) * 64;
    bytes += (project.activities?.length || 0) * 180;

  });

  if (bytes < 1024) {

    return {
      value: `${bytes} B`,
      kb: (bytes / 1024).toFixed(1),
      percent: 1,
      color: "#10B981",
      level: "Excellent",
    };

  }

  const kb = bytes / 1024;

  if (kb < 1024) {

    return {
      value: `${kb.toFixed(1)} KB`,
      kb: kb.toFixed(1),
      percent: Math.min(Math.round(kb / 10), 100),
      color: "#10B981",
      level: "Excellent",
    };

  }

  const mb = kb / 1024;

  return {
    value: `${mb.toFixed(2)} MB`,
    kb: (mb * 1024).toFixed(1),
    percent: Math.min(Math.round(mb * 5), 100),
    color: mb > 10 ? "#EF4444" : "#F59E0B",
    level: mb > 10 ? "High" : "Normal",
  };

}

export default function useDashboard() {

  const {

    projects,

    activeProject,

  } = useProject();

  const storage = calculateStorage(projects);

  const projectCount = projects.length;

  const favoriteCount = projects.filter(

    project => project.favorite,

  ).length;

  const animationCount = projects.reduce(

    (total, project) => total + (project.animations?.length || 0),

    0,

  );

  const componentCount = projects.reduce(

    (total, project) => total + (project.components?.length || 0),

    0,

  );

  return {

    activeProject,

    overview: [

      {

        id: "projects",

        icon: "📁",

        title: "Projects",

        value: projectCount,

        subtitle: "Workspace projects",

        color: "#2563EB",

      },

      {

        id: "favorites",

        icon: "⭐",

        title: "Favorites",

        value: favoriteCount,

        subtitle: "Pinned projects",

        color: "#F59E0B",

      },

      {

        id: "storage",

        icon: "💾",

        title: "Storage",

        value: storage.value,

        subtitle: `${storage.level} • ${storage.percent}%`,

        color: storage.color,

      },

      {

        id: "animations",

        icon: "🎬",

        title: "Animations",

        value: animationCount,

        subtitle: "Across projects",

        color: "#8B5CF6",

      },

      {

        id: "components",

        icon: "🧩",

        title: "Components",

        value: componentCount,

        subtitle: "Reusable components",

        color: "#EC4899",

      },

    ],

    quickActions: [

      {

        id: "notes",

        title: "Notes",

        icon: "📝",

        tool: "notes",

      },

      {

        id: "sketch",

        title: "Sketch",

        icon: "🎨",

        tool: "sketch",

      },

      {

        id: "assets",

        title: "Assets",

        icon: "📁",

        tool: "assets",

      },

      {

        id: "tasks",

        title: "Tasks",

        icon: "✅",

        tool: "tasks",

      },

    ],

    stats: {

      tasks: {

        completed: 0,

        total: 0,

      },

    },

    summary: {

      storage: {

        kb: storage.kb,

      },

      workspaceReady: projectCount > 0,

      totalModules: 7,

    },

  };

}
