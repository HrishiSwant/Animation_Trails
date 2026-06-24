import StorageKeys from "../storage/StorageKeys";

export default class BackupManager {

    static createBackup() {

        const backup = {

            version: 1,

            createdAt:
                new Date().toISOString(),

            workspace: {

                notes:
                    localStorage.getItem(
                        StorageKeys.NOTES
                    ),

                sketch:
                    localStorage.getItem(
                        StorageKeys.SKETCH
                    ),

                tasks:
                    localStorage.getItem(
                        StorageKeys.TASKS
                    ),

                assets:
                    localStorage.getItem(
                        StorageKeys.ASSETS
                    ),

            },

        };

        return backup;

    }

    static downloadBackup() {

        const backup =
            this.createBackup();

        const blob = new Blob(

            [
                JSON.stringify(
                    backup,
                    null,
                    2
                )
            ],

            {
                type:
                    "application/json"
            }

        );

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =

            `hrishi-studio-backup-${Date.now()}.json`;

        link.click();

        URL.revokeObjectURL(url);

    }

    static restoreBackup(backup) {

        if (
            !backup ||
            !backup.workspace
        ) {
            return false;
        }

        const {
            notes,
            sketch,
            tasks,
            assets,
        } = backup.workspace;

        if (notes) {
            localStorage.setItem(
                StorageKeys.NOTES,
                notes
            );
        }

        if (sketch) {
            localStorage.setItem(
                StorageKeys.SKETCH,
                sketch
            );
        }

        if (tasks) {
            localStorage.setItem(
                StorageKeys.TASKS,
                tasks
            );
        }

        if (assets) {
            localStorage.setItem(
                StorageKeys.ASSETS,
                assets
            );
        }

        return true;

    }

}
