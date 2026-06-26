import { useState } from "react";

const DEFAULT_TASK = {

  title: "",

  description: "",

  priority: "medium",

  category: "General",

  dueDate: "",

};

export default function useTaskEditor({

  createTask,

  updateTask,

}) {

  const [editingTask, setEditingTask] =
    useState(null);

  const [task, setTask] =
    useState(DEFAULT_TASK);

  function openCreate() {

    setEditingTask(null);

    setTask(DEFAULT_TASK);

  }

  function openEdit(existingTask) {

    setEditingTask(existingTask);

    setTask({

      title:
        existingTask.title,

      description:
        existingTask.description,

      priority:
        existingTask.priority,

      category:
        existingTask.category,

      dueDate:
        existingTask.dueDate || "",

    });

  }

  function updateField(

    field,

    value

  ) {

    setTask(previous => ({

      ...previous,

      [field]: value,

    }));

  }

  function reset() {

    setEditingTask(null);

    setTask(DEFAULT_TASK);

  }

  function save() {

    if (

      !task.title.trim()

    ) {

      alert(

        "Task title is required."

      );

      return false;

    }

    if (editingTask) {

      updateTask(

        editingTask.id,

        task

      );

    } else {

      createTask(task);

    }

    reset();

    return true;

  }

  function cancel() {

    reset();

  }

  return {

    task,

    editingTask,

    updateField,

    openCreate,

    openEdit,

    save,

    cancel,

    reset,

    isEditing:

      editingTask !== null,

  };

}
