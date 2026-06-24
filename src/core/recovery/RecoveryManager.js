const RECOVERY_KEY =
  "hrishi-studio:recovery";

const MAX_RECOVERY_POINTS = 10;

export default class RecoveryManager {

  static createSnapshot(data) {

    try {

      const snapshots =
        this.getSnapshots();

      snapshots.unshift({

        id: Date.now(),

        createdAt:
          new Date().toISOString(),

        data,

      });

      if (
        snapshots.length >
        MAX_RECOVERY_POINTS
      ) {

        snapshots.length =
          MAX_RECOVERY_POINTS;

      }

      localStorage.setItem(

        RECOVERY_KEY,

        JSON.stringify(snapshots)

      );

      return true;

    } catch (error) {

      console.error(

        "[RecoveryManager]",

        error

      );

      return false;

    }

  }

  static getSnapshots() {

    try {

      const raw =
        localStorage.getItem(
          RECOVERY_KEY
        );

      if (!raw) {

        return [];

      }

      return JSON.parse(raw);

    } catch {

      return [];

    }

  }

  static restoreSnapshot(id) {

    const snapshots =
      this.getSnapshots();

    return snapshots.find(

      snapshot =>
        snapshot.id === id

    );

  }

  static deleteSnapshot(id) {

    const snapshots =
      this.getSnapshots().filter(

        snapshot =>
          snapshot.id !== id

      );

    localStorage.setItem(

      RECOVERY_KEY,

      JSON.stringify(
        snapshots
      )

    );

  }

  static clearSnapshots() {

    localStorage.removeItem(
      RECOVERY_KEY
    );

  }

}
