import StorageManager from "../storage/StorageManager";
import StorageKeys from "../storage/StorageKeys";

export default class TaskManager {

  static getTasks() {

    return StorageManager.load(

      StorageKeys.TASKS,

      []

    );

  }

  static saveTasks(tasks) {

    StorageManager.save(

      StorageKeys.TASKS,

      tasks

    );

  }

  static createTask(data) {

    const tasks =
      this.getTasks();

    const task = {

      id: Date.now(),

      title:
        data.title || "",

      description:
        data.description || "",

      completed: false,

      favorite: false,

      pinned: false,

      priority:
        data.priority || "medium",

      category:
        data.category || "General",

      dueDate:
        data.dueDate || null,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

    };

    tasks.unshift(task);

    this.saveTasks(tasks);

    return task;

  }

  static updateTask(id, updates) {

    const tasks =
      this.getTasks();

    const index =
      tasks.findIndex(

        task =>
          task.id === id

      );

    if (index === -1) {

      return false;

    }

    tasks[index] = {

      ...tasks[index],

      ...updates,

      updatedAt:
        new Date().toISOString(),

    };

    this.saveTasks(tasks);

    return true;

  }

  static deleteTask(id) {

    const tasks =
      this.getTasks().filter(

        task =>
          task.id !== id

      );

    this.saveTasks(tasks);

  }

  static toggleCompleted(id) {

    const tasks =
      this.getTasks();

    const task =
      tasks.find(

        task =>
          task.id === id

      );

    if (!task) {

      return;

    }

    task.completed =
      !task.completed;

    task.updatedAt =
      new Date().toISOString();

    this.saveTasks(tasks);

  }

  static toggleFavorite(id) {

    const tasks =
      this.getTasks();

    const task =
      tasks.find(

        task =>
          task.id === id

      );

    if (!task) {

      return;

    }

    task.favorite =
      !task.favorite;

    task.updatedAt =
      new Date().toISOString();

    this.saveTasks(tasks);

  }

  static togglePinned(id) {

    const tasks =
      this.getTasks();

    const task =
      tasks.find(

        task =>
          task.id === id

      );

    if (!task) {

      return;

    }

    task.pinned =
      !task.pinned;

    task.updatedAt =
      new Date().toISOString();

    this.saveTasks(tasks);

  }

  static clearTasks() {

    this.saveTasks([]);

  }

}
