const ActivityTypes = {

  PROJECT_CREATED: "project_created",

  PROJECT_OPENED: "project_opened",

  PROJECT_RENAMED: "project_renamed",

  PROJECT_DUPLICATED: "project_duplicated",

  PROJECT_DELETED: "project_deleted",

  PROJECT_UPDATED: "project_updated",

  ANIMATION_ADDED: "animation_added",

  ANIMATION_REMOVED: "animation_removed",

  COMPONENT_ADDED: "component_added",

  COMPONENT_REMOVED: "component_removed",

  FOLDER_CREATED: "folder_created",

  FOLDER_REMOVED: "folder_removed",

};

function createActivity({

  type,

  title,

  description = "",

  icon = "📝",

}) {

  return {

    id:

      crypto.randomUUID(),

    type,

    title,

    description,

    icon,

    createdAt:

      Date.now(),

  };

}

const ProjectActivity = {

  ActivityTypes,

  createActivity,

};

export default ProjectActivity;
