import { useState } from "react";

import "./AssetViewer.css";

export default function AssetViewer({

  asset,

  onClose,

}) {

  const [zoom, setZoom] =
    useState(1);

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

          style={{

            transform:

              `scale(${zoom})`

          }}

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

        </audio>

      );

    }

    if (

      asset.type.startsWith("text/") ||

      asset.type ===
      "application/json"

    ) {

      try {

        return (

          <pre className="viewer-text">

            {atob(

              asset.data.split(",")[1]

            )}

          </pre>

        );

      } catch {

        return (

          <div className="viewer-placeholder">

            Unable to preview file.

          </div>

        );

      }

    }

    return (

      <div className="viewer-placeholder">

        📦

        <br />

        Preview unavailable

      </div>

    );

  }

  function formatSize(bytes) {

    if (bytes < 1024)

      return `${bytes} B`;

    if (bytes < 1024 * 1024)

      return `${(

        bytes / 1024

      ).toFixed(1)} KB`;

    return `${(

      bytes /

      (1024 * 1024)

    ).toFixed(2)} MB`;

  }

  function downloadAsset() {

    const link =
      document.createElement("a");

    link.href = asset.data;

    link.download = asset.name;

    link.click();

  }

  function openInNewTab() {

    window.open(

      asset.data,

      "_blank"

    );

  }

  async function copyFilename() {

    try {

      await navigator.clipboard.writeText(

        asset.name

      );

      alert(

        "Filename copied."

      );

    } catch {

      alert(

        "Copy failed."

      );

    }

  }

  return (

    <div

      className="asset-viewer-overlay"

      onClick={onClose}

    >

      <div

        className="asset-viewer"

        onClick={(e)=>

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

        <div className="viewer-toolbar">

          <button

            onClick={()=>

              setZoom(

                zoom + 0.25

              )

            }

          >

            ＋

          </button>

          <button

            onClick={()=>

              setZoom(

                Math.max(

                  0.25,

                  zoom - 0.25

                )

              )

            }

          >

            －

          </button>

          <button

            onClick={()=>

              setZoom(1)

            }

          >

            Reset

          </button>

          <button

            onClick={downloadAsset}

          >

            Download

          </button>

          <button

            onClick={openInNewTab}

          >

            Open

          </button>

          <button

            onClick={copyFilename}

          >

            Copy Name

          </button>

        </div>

        {renderPreview()}

        <div className="viewer-info">

          <p>

            <strong>Type:</strong>

            {" "}

            {asset.type}

          </p>

          <p>

            <strong>Size:</strong>

            {" "}

            {formatSize(asset.size)}

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
