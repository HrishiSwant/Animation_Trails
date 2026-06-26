import { useState } from "react";

import TaskManager from "../../core/tasks/TaskManager";

export default function useTasks() {

  const [tasks, setTasks] =
    useState(
      TaskManager.getTasks()
    );

  function refreshTasks() {

    setTasks(
      TaskManager.getTasks()
    );

  }

  function createTask(data) {

    TaskManager.createTask(
      data
    );

    refreshTasks();

  }

  function updateTask(id, updates) {

    TaskManager.updateTask(

      id,

      updates

    );

    refreshTasks();

  }

  function deleteTask(id) {

    TaskManager.deleteTask(
      id
    );

    refreshTasks();

  }

  function toggleCompleted(id) {

    TaskManager.toggleCompleted(
      id
    );

    refreshTasks();

  }

  function toggleFavorite(id) {

    TaskManager.toggleFavorite(
      id
    );

    refreshTasks();

  }

  function togglePinned(id) {

    TaskManager.togglePinned(
      id
    );

    refreshTasks();

  }

  function clearTasks() {

    TaskManager.clearTasks();

    refreshTasks();

  }

  return {

    tasks,

    refreshTasks,

    createTask,

    updateTask,

    deleteTask,

    toggleCompleted,

    toggleFavorite,

    togglePinned,

    clearTasks,

  };

}
