export default function VideoViewer({

  asset,

}) {

  return (

    <video

      controls

      className="viewer-video"

    >

      <source

        src={asset.data}

        type={asset.type}

      />

    </video>

  );

}
