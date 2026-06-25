import "./AssetViewer.css";

export default function AssetViewer({

  asset,

  onClose,

}) {

  if (!asset) {

    return null;

  }

  return (

    <div
      className="asset-viewer-overlay"
      onClick={onClose}
    >

      <div
        className="asset-viewer"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <button
          className="close-viewer"
          onClick={onClose}
        >

          ✕

        </button>

        <h2>

          {asset.name}

        </h2>

        {

          asset.type.startsWith("image/") ? (

            <img

              src={asset.data}

              alt={asset.name}

              className="viewer-image"

            />

          ) : (

            <div className="viewer-placeholder">

              Preview not available

            </div>

          )

        }

        <div className="viewer-info">

          <p>

            <strong>Type:</strong>

            {" "}

            {asset.type}

          </p>

          <p>

            <strong>Size:</strong>

            {" "}

            {(

              asset.size /

              1024

            ).toFixed(1)}

            KB

          </p>

          <p>

            <strong>Uploaded:</strong>

            {" "}

            {

              new Date(

                asset.createdAt

              ).toLocaleString()

            }

          </p>

        </div>

      </div>

    </div>

  );

}
