import useSettings from "./useSettings";

export default function useTasksSettings() {

  const settings =
    useSettings();

  const tasks =
    settings.settings.tasks;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "tasks",

      key,

      value,

    );

  }

  function setShowCompleted(value) {

    update(

      "showCompleted",

      value,

    );

  }

  function setConfirmDelete(value) {

    update(

      "confirmDelete",

      value,

    );

  }

  function setShowStatistics(value) {

    update(

      "showStatistics",

      value,

    );

  }

  function setDefaultSort(value) {

    update(

      "defaultSort",

      value,

    );

  }

  return {

    tasks,

    showCompleted:
      tasks.showCompleted,

    confirmDelete:
      tasks.confirmDelete,

    showStatistics:
      tasks.showStatistics,

    defaultSort:
      tasks.defaultSort,

    update,

    setShowCompleted,

    setConfirmDelete,

    setShowStatistics,

    setDefaultSort,

  };

}
