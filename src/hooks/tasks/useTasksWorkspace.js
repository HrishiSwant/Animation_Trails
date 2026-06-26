import useTasks from "./useTasks";
import useTaskEditor from "./useTaskEditor";
import useTaskFilters from "./useTaskFilters";

export default function useTasksWorkspace() {

  /*
  ==========================
      TASK STATE
  ==========================
  */

  const {

    tasks,

    refreshTasks,

    createTask,

    updateTask,

    deleteTask,

    toggleCompleted,

    toggleFavorite,

    togglePinned,

    clearTasks,

  } = useTasks();

  /*
  ==========================
      TASK EDITOR
  ==========================
  */

  const editor =
    useTaskEditor({

      createTask,

      updateTask,

    });

  /*
  ==========================
      FILTERS
  ==========================
  */

  const filters =
    useTaskFilters(

      tasks

    );

  /*
  ==========================
      DELETE WRAPPER
  ==========================
  */

  function handleDelete(id) {

    deleteTask(id);

    if (

      editor.isEditing &&

      editor.editingTask?.id === id

    ) {

      editor.cancel();

    }

  }

  /*
  ==========================
      RETURN
  ==========================
  */

  return {

    /*
    Tasks
    */

    tasks,

    filteredTasks:

      filters.filteredTasks,

    refreshTasks,

    createTask,

    updateTask,

    deleteTask:
      handleDelete,

    toggleCompleted,

    toggleFavorite,

    togglePinned,

    clearTasks,

    /*
    Filters
    */

    search:

      filters.search,

    setSearch:

      filters.setSearch,

    category:

      filters.category,

    setCategory:

      filters.setCategory,

    priority:

      filters.priority,

    setPriority:

      filters.setPriority,

    status:

      filters.status,

    setStatus:

      filters.setStatus,

    sort:

      filters.sort,

    setSort:

      filters.setSort,

    /*
    Editor
    */

    task:

      editor.task,

    editingTask:

      editor.editingTask,

    isEditing:

      editor.isEditing,

    updateField:

      editor.updateField,

    openCreate:

      editor.openCreate,

    openEdit:

      editor.openEdit,

    save:

      editor.save,

    cancel:

      editor.cancel,

    reset:

      editor.reset,

  };

}
