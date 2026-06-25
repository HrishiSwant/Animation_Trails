export default function PDFViewer({

  asset,

}) {

  return (

    <iframe

      src={asset.data}

      title={asset.name}

      className="viewer-frame"

    />

  );

}
