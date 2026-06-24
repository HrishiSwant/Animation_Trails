import BackupManager from "../backup/BackupManager";

export default class ExportManager {

  static exportWorkspace() {

    BackupManager.downloadBackup();

  }

  static exportJSON(filename, data) {

    const blob = new Blob(

      [
        JSON.stringify(
          data,
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

    link.download = filename;

    link.click();

    URL.revokeObjectURL(url);

  }

  static exportText(filename, text) {

    const blob = new Blob(

      [text],

      {
        type:
          "text/plain"
      }

    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = filename;

    link.click();

    URL.revokeObjectURL(url);

  }

}
