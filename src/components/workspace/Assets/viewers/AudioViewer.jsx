export default function AudioViewer({

  asset,

}) {

  return (

    <audio

      controls

      className="viewer-audio"

    >

      <source

        src={asset.data}

        type={asset.type}

      />

    </audio>

  );

}
