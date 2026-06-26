import { useMemo } from "react";

import StorageManager from "../../core/storage/StorageManager";
import StorageKeys from "../../core/storage/StorageKeys";

export default function useWorkspaceStats() {

  const stats = useMemo(() => {

    /*
    ==========================
        LOAD DATA
    ==========================
    */

    const notes =
      StorageManager.load(

        StorageKeys.NOTES,

        []

      );

    const tasks =
      StorageManager.load(

        StorageKeys.TASKS,

        []

      );

    const assets =
      StorageManager.load(

        StorageKeys.ASSETS,

        []

      );

    const sketch =
      StorageManager.load(

        StorageKeys.SKETCH,

        null

      );

    /*
    ==========================
        NOTES
    ==========================
    */

    const noteCount =
      notes.length;

    /*
    ==========================
        TASKS
    ==========================
    */

    const taskCount =
      tasks.length;

    const completedTasks =
      tasks.filter(

        task => task.completed

      ).length;

    const pendingTasks =
      taskCount -
      completedTasks;

    /*
    ==========================
        ASSETS
    ==========================
    */

    const assetCount =
      assets.length;

    const favoriteAssets =
      assets.filter(

        asset => asset.favorite

      ).length;

    /*
    ==========================
        STORAGE
    ==========================
    */

    const totalStorageBytes =
      new Blob([

        JSON.stringify(notes),

        JSON.stringify(tasks),

        JSON.stringify(assets),

        JSON.stringify(sketch),

      ]).size;

    /*
    ==========================
        RETURN
    ==========================
    */

    return {

      notes: {

        count:
          noteCount,

      },

      tasks: {

        total:
          taskCount,

        completed:
          completedTasks,

        pending:
          pendingTasks,

      },

      assets: {

        count:
          assetCount,

        favorites:
          favoriteAssets,

      },

      sketch: {

        exists:
          !!sketch,

      },

      storage: {

        bytes:
          totalStorageBytes,

        kb:
          (

            totalStorageBytes /

            1024

          ).toFixed(2),

        mb:
          (

            totalStorageBytes /

            (1024 * 1024)

          ).toFixed(2),

      },

    };

  }, []);

  return stats;

}
