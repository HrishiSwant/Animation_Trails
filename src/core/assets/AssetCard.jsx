import "./AssetCard.css";

export default function AssetCard({

  asset,

  onDelete,

}) {

  function renderPreview() {

    if (
      asset.type.startsWith("image/")
    ) {

      return (

        <img

          src={asset.data}

          alt={asset.name}

          className="asset-image"

        />

      );

    }

    if (
      asset.type ===
      "application/pdf"
    ) {

      return (

        <div className="asset-icon">

          📕 PDF

        </div>

      );

    }

    if (
      asset.type.startsWith("video/")
    ) {

      return (

        <div className="asset-icon">

          🎥 VIDEO

        </div>

      );

    }

    if (
      asset.type.startsWith("audio/")
    ) {

      return (

        <div className="asset-icon">

          🎵 AUDIO

        </div>

      );

    }

    return (

      <div className="asset-icon">

        📄 FILE

      </div>

    );

  }

  return (

    <div className="asset-card">

      <div className="asset-preview">

        {renderPreview()}

      </div>

      <h3>

        {asset.name}

      </h3>

      <p>

        {asset.type}

      </p>

      <button

        onClick={() =>
          onDelete(
            asset.id
          )
        }

      >

        Delete

      </button>

    </div>

  );

}
