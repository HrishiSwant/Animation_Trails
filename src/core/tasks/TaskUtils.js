export default class TaskUtils {

  static isOverdue(task) {

    if (

      !task.dueDate ||

      task.completed

    ) {

      return false;

    }

    return (

      new Date(task.dueDate) <

      new Date()

    );

  }

  static isDueToday(task) {

    if (!task.dueDate) {

      return false;

    }

    const today =
      new Date();

    const due =
      new Date(task.dueDate);

    return (

      today.getFullYear() ===

        due.getFullYear() &&

      today.getMonth() ===

        due.getMonth() &&

      today.getDate() ===

        due.getDate()

    );

  }

  static getCompletionProgress(tasks) {

    if (

      tasks.length === 0

    ) {

      return 0;

    }

    const completed =
      tasks.filter(

        task => task.completed

      ).length;

    return Math.round(

      (

        completed /

        tasks.length

      ) * 100

    );

  }

  static getCompletedCount(tasks) {

    return tasks.filter(

      task => task.completed

    ).length;

  }

  static getPendingCount(tasks) {

    return tasks.filter(

      task => !task.completed

    ).length;

  }

  static getFavoriteCount(tasks) {

    return tasks.filter(

      task => task.favorite

    ).length;

  }

  static getPinnedCount(tasks) {

    return tasks.filter(

      task => task.pinned

    ).length;

  }

  static sortPinnedFirst(tasks) {

    return [...tasks].sort(

      (a, b) =>

        Number(b.pinned) -

        Number(a.pinned)

    );

  }

  static formatDate(date) {

    if (!date) {

      return "-";

    }

    return new Date(

      date

    ).toLocaleDateString();

  }

}
