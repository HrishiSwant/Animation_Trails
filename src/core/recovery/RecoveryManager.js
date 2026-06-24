const RECOVERY_KEY =
  "hrishi-studio:recovery";

const RECOVERY_META_KEY =
  "hrishi-studio:recovery-meta";

const MAX_RECOVERY_POINTS = 10;

const SNAPSHOT_INTERVAL =
  30000;

export default class RecoveryManager {

  static shouldCreateSnapshot() {

    try {

      const raw =
        localStorage.getItem(
          RECOVERY_META_KEY
        );

      if (!raw) {

        return true;

      }

      const meta =
        JSON.parse(raw);

      const now = Date.now();

      return (

        now - meta.lastSnapshot >

        SNAPSHOT_INTERVAL

      );

    } catch {

      return true;

    }

  }

  static createSnapshot(data) {

    if (
      !this.shouldCreateSnapshot()
    ) {

      return false;

    }

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

        JSON.stringify(
          snapshots
        )

      );

      localStorage.setItem(

        RECOVERY_META_KEY,

        JSON.stringify({

          lastSnapshot:
            Date.now(),

        })

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

    localStorage.removeItem(
      RECOVERY_META_KEY
    );

  }

}
