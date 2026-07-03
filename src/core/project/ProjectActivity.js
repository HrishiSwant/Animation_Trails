const ActivityTypes = {

  PROJECT_CREATED: "project_created",

  PROJECT_OPENED: "project_opened",

  PROJECT_RENAMED: "project_renamed",

  PROJECT_DUPLICATED: "project_duplicated",

  PROJECT_DELETED: "project_deleted",

  PROJECT_UPDATED: "project_updated",

  PROJECT_FAVORITED: "project_favorited",

  PROJECT_UNFAVORITED: "project_unfavorited",

  ANIMATION_ADDED: "animation_added",

  ANIMATION_REMOVED: "animation_removed",

  COMPONENT_ADDED: "component_added",

  COMPONENT_REMOVED: "component_removed",

  FOLDER_CREATED: "folder_created",

  FOLDER_REMOVED: "folder_removed",

};

const ActivityConfig = {

  [ActivityTypes.PROJECT_CREATED]: {

    title: "Project Created",

    icon: "🎉",

    color: "#22c55e",

  },

  [ActivityTypes.PROJECT_OPENED]: {

    title: "Project Opened",

    icon: "📂",

    color: "#3b82f6",

  },

  [ActivityTypes.PROJECT_RENAMED]: {

    title: "Project Renamed",

    icon: "✏️",

    color: "#f59e0b",

  },

  [ActivityTypes.PROJECT_DUPLICATED]: {

    title: "Project Duplicated",

    icon: "📄",

    color: "#8b5cf6",

  },

  [ActivityTypes.PROJECT_DELETED]: {

    title: "Project Deleted",

    icon: "🗑️",

    color: "#ef4444",

  },

  [ActivityTypes.PROJECT_UPDATED]: {

    title: "Project Updated",

    icon: "⚙️",

    color: "#06b6d4",

  },

  [ActivityTypes.PROJECT_FAVORITED]: {

    title: "Project Favorited",

    icon: "⭐",

    color: "#facc15",

  },

  [ActivityTypes.PROJECT_UNFAVORITED]: {

    title: "Project Unfavorited",

    icon: "☆",

    color: "#94a3b8",

  },

  [ActivityTypes.ANIMATION_ADDED]: {

    title: "Animation Added",

    icon: "✨",

    color: "#a855f7",

  },

  [ActivityTypes.ANIMATION_REMOVED]: {

    title: "Animation Removed",

    icon: "❌",

    color: "#ef4444",

  },

  [ActivityTypes.COMPONENT_ADDED]: {

    title: "Component Added",

    icon: "🧩",

    color: "#14b8a6",

  },

  [ActivityTypes.COMPONENT_REMOVED]: {

    title: "Component Removed",

    icon: "➖",

    color: "#ef4444",

  },

  [ActivityTypes.FOLDER_CREATED]: {

    title: "Folder Created",

    icon: "📁",

    color: "#f59e0b",

  },

  [ActivityTypes.FOLDER_REMOVED]: {

    title: "Folder Removed",

    icon: "🗂️",

    color: "#ef4444",

  },

};

function createActivity({

  type,

  title,

  description = "",

  icon,

}) {

  const config =

    ActivityConfig[type] || {};

  return {

    id:

      crypto.randomUUID(),

    type,

    title:

      title ||

      config.title ||

      "Activity",

    description,

    icon:

      icon ||

      config.icon ||

      "📝",

    color:

      config.color ||

      "#6b7280",

    createdAt:

      Date.now(),

  };

}

const ProjectActivity = {

  ActivityTypes,

  ActivityConfig,

  createActivity,

};

export default ProjectActivity;
