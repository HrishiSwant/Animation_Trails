import "./AssetCard.css";

export default function AssetCard({

  asset,

  onDelete,

  onFavorite,

  onOpen,

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

  function formatSize(bytes) {

    if (bytes < 1024) {

      return `${bytes} B`;

    }

    if (bytes < 1024 * 1024) {

      return `${(

        bytes / 1024

      ).toFixed(1)} KB`;

    }

    return `${(

      bytes /

      (1024 * 1024)

    ).toFixed(2)} MB`;

  }

  return (

    <div className="asset-card">

      <div className="asset-preview"
        onClick={()=>

          onOpen(asset)

          }

        >

        {renderPreview()}

      </div>

      <div className="asset-content">

        <h3>

          {asset.name}

        </h3>

        <p>

          {asset.type}

        </p>

        <p>

          📏 {formatSize(asset.size)}

        </p>

        <p>

          📅 {

            new Date(

              asset.createdAt

            ).toLocaleDateString()

          }

        </p>

        <div className="asset-actions">

          <button

            onClick={() =>
              onFavorite(
                asset.id
              )
            }

          >

            {

              asset.favorite

                ? "⭐"

                : "☆"

            }

          </button>

          <button

            onClick={() =>
              onDelete(
                asset.id
              )
            }

          >

            🗑 Delete

          </button>

        </div>

      </div>

    </div>

  );

}
