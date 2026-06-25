import "./AssetViewer.css";

export default function AssetViewer({

  asset,

  onClose,

}) {

  if (!asset) {

    return null;

  }

  function renderPreview() {

    if (

      asset.type.startsWith("image/")

    ) {

      return (

        <img

          src={asset.data}

          alt={asset.name}

          className="viewer-image"

        />

      );

    }

    if (

      asset.type ===
      "application/pdf"

    ) {

      return (

        <iframe

          src={asset.data}

          title={asset.name}

          className="viewer-frame"

        />

      );

    }

    if (

      asset.type.startsWith("video/")

    ) {

      return (

        <video

          controls

          className="viewer-video"

        >

          <source

            src={asset.data}

            type={asset.type}

          />

          Your browser does not support video playback.

        </video>

      );

    }

    if (

      asset.type.startsWith("audio/")

    ) {

      return (

        <audio

          controls

          className="viewer-audio"

        >

          <source

            src={asset.data}

            type={asset.type}

          />

          Your browser does not support audio playback.

        </audio>

      );

    }

    if (

      asset.type.startsWith("text/") ||

      asset.type === "application/json"

    ) {

      try {

        const content = atob(

          asset.data.split(",")[1]

        );

        return (

          <pre className="viewer-text">

            {content}

          </pre>

        );

      } catch {

        return (

          <div className="viewer-placeholder">

            Unable to display this text file.

          </div>

        );

      }

    }

    return (

      <div className="viewer-placeholder">

        <div style={{ fontSize: "64px" }}>

          📦

        </div>

        <h3>

          Preview Not Available

        </h3>

        <p>

          This file type cannot be previewed yet.

        </p>

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

        {renderPreview()}

        <div className="viewer-info">

          <p>

            <strong>

              Type:

            </strong>

            {" "}

            {asset.type}

          </p>

          <p>

            <strong>

              Size:

            </strong>

            {" "}

            {formatSize(asset.size)}

          </p>

          <p>

            <strong>

              Uploaded:

            </strong>

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
