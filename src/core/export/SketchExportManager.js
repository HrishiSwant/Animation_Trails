export default class SketchExportManager {

  static downloadImage(
    dataUrl,
    filename
  ) {

    const link =
      document.createElement("a");

    link.href = dataUrl;

    link.download =
      filename;

    link.click();

  }

}
