const WORKSPACE_RECOVERY_KEY =
  "hrishi-studio:workspace-recovery";

const MAX_WORKSPACE_RECOVERY_POINTS = 20;

export default class WorkspaceRecoveryManager {

  static createSnapshot() {

    try {

      const snapshots =
        this.getSnapshots();

      snapshots.unshift({

        id: Date.now(),

        createdAt:
          new Date().toISOString(),

        workspace: {

          notes:
            localStorage.getItem(
              "hrishi-studio:workspace:notes"
            ),

          sketch:
            localStorage.getItem(
              "hrishi-studio:workspace:sketch"
            ),

          tasks:
            localStorage.getItem(
              "hrishi-studio:workspace:tasks"
            ),

          assets:
            localStorage.getItem(
              "hrishi-studio:workspace:assets"
            ),

        },

      });

      if (
        snapshots.length >
        MAX_WORKSPACE_RECOVERY_POINTS
      ) {

        snapshots.length =
          MAX_WORKSPACE_RECOVERY_POINTS;

      }

      localStorage.setItem(

        WORKSPACE_RECOVERY_KEY,

        JSON.stringify(
          snapshots
        )

      );

      return true;

    } catch (error) {

      console.error(

        "[WorkspaceRecoveryManager]",

        error

      );

      return false;

    }

  }

  static getSnapshots() {

    try {

      const raw =
        localStorage.getItem(
          WORKSPACE_RECOVERY_KEY
        );

      if (!raw) {

        return [];

      }

      return JSON.parse(raw);

    } catch {

      return [];

    }

  }

  static rollback(id) {

    try {

      const snapshot =
        this.getSnapshots().find(

          item =>
            item.id === id

        );

      if (!snapshot) {

        return false;

      }

      const {
        notes,
        sketch,
        tasks,
        assets,
      } = snapshot.workspace;

      if (notes) {

        localStorage.setItem(

          "hrishi-studio:workspace:notes",

          notes

        );

      }

      if (sketch) {

        localStorage.setItem(

          "hrishi-studio:workspace:sketch",

          sketch

        );

      }

      if (tasks) {

        localStorage.setItem(

          "hrishi-studio:workspace:tasks",

          tasks

        );

      }

      if (assets) {

        localStorage.setItem(

          "hrishi-studio:workspace:assets",

          assets

        );

      }

      return true;

    } catch {

      return false;

    }

  }

  static deleteSnapshot(id) {

    const snapshots =
      this.getSnapshots().filter(

        snapshot =>
          snapshot.id !== id

      );

    localStorage.setItem(

      WORKSPACE_RECOVERY_KEY,

      JSON.stringify(
        snapshots
      )

    );

  }

  static clear() {

    localStorage.removeItem(
      WORKSPACE_RECOVERY_KEY
    );

  }

}
