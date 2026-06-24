import BackupManager from "../backup/BackupManager";

export default class ExportManager {

  static exportWorkspace() {

    BackupManager.downloadBackup();

  }

  static downloadFile(
    filename,
    content,
    type
  ) {

    const blob = new Blob(

      [content],

      { type }

    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      filename;

    link.click();

    URL.revokeObjectURL(url);

  }

  static exportJSON(
    filename,
    data
  ) {

    this.downloadFile(

      filename,

      JSON.stringify(
        data,
        null,
        2
      ),

      "application/json"

    );

  }

  static exportText(
    filename,
    text
  ) {

    this.downloadFile(

      filename,

      text,

      "text/plain"

    );

  }

  static exportMarkdown(
    filename,
    markdown
  ) {

    this.downloadFile(

      filename,

      markdown,

      "text/markdown"

    );

  }

}
