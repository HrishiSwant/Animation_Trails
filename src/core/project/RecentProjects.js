const KEY = "hrishi-recent-projects";

const MAX_RECENT = 10;

class RecentProjects {

  /*
  ==========================
      LOAD
  ==========================
  */

  load() {

    try {

      const value =

        localStorage.getItem(KEY);

      return value

        ? JSON.parse(value)

        : [];

    }

    catch {

      return [];

    }

  }

  /*
  ==========================
      SAVE
  ==========================
  */

  save(list) {

    localStorage.setItem(

      KEY,

      JSON.stringify(list),

    );

  }

  /*
  ==========================
      GET
  ==========================
  */

  getAll() {

    return this.load();

  }

  /*
  ==========================
      ADD
  ==========================
  */

  add(project) {

    if (!project) {

      return;

    }

    let recent = this.load();

    recent = recent.filter(

      item =>

        item.id !== project.id,

    );

    recent.unshift({

      id: project.id,

      name: project.name,

      updatedAt: project.updatedAt,

    });

    recent = recent.slice(

      0,

      MAX_RECENT,

    );

    this.save(recent);

  }

  /*
  ==========================
      REMOVE
  ==========================
  */

  remove(id) {

    const recent =

      this.load().filter(

        project =>

          project.id !== id,

      );

    this.save(recent);

  }

  /*
  ==========================
      CLEAR
  ==========================
  */

  clear() {

    localStorage.removeItem(

      KEY,

    );

  }

}

export default new RecentProjects();
