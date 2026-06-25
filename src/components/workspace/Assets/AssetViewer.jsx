import { useState } from "react";

import "./AssetViewer.css";

import ImageViewer from "./viewers/ImageViewer";
import PDFViewer from "./viewers/PDFViewer";
import VideoViewer from "./viewers/VideoViewer";
import AudioViewer from "./viewers/AudioViewer";
import TextViewer from "./viewers/TextViewer";
import UnknownViewer from "./viewers/UnknownViewer";

export default function AssetViewer({

  assets,

  currentIndex,

  onNavigate,

  onClose,

}) {

  const [zoom, setZoom] =
    useState(1);

  if (

    currentIndex === -1 ||

    !assets ||

    assets.length === 0

  ) {

    return null;

  }

  const asset =
    assets[currentIndex];

  const isFirst =
    currentIndex === 0;

  const isLast =
    currentIndex ===
    assets.length - 1;

  function previousAsset() {

    if (isFirst) return;

    setZoom(1);

    onNavigate(
      currentIndex - 1
    );

  }

  function nextAsset() {

    if (isLast) return;

    setZoom(1);

    onNavigate(
      currentIndex + 1
    );

  }

  function renderPreview() {

    if (

      asset.type.startsWith("image/")

    ) {

      return (

        <ImageViewer

          asset={asset}

          zoom={zoom}

        />

      );

    }

    if (

      asset.type ===
      "application/pdf"

    ) {

      return (

        <PDFViewer

          asset={asset}

        />

      );

    }

    if (

      asset.type.startsWith("video/")

    ) {

      return (

        <VideoViewer

          asset={asset}

        />

      );

    }

    if (

      asset.type.startsWith("audio/")

    ) {

      return (

        <AudioViewer

          asset={asset}

        />

      );

    }

    if (

      asset.type.startsWith("text/") ||

      asset.type ===
      "application/json"

    ) {

      return (

        <TextViewer

          asset={asset}

        />

      );

    }

    return <UnknownViewer />;

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

        <div className="viewer-toolbar">

          <button

            onClick={() =>

              setZoom(

                z => z + 0.25

              )

            }

          >

            ＋

          </button>

          <button

            onClick={() =>

              setZoom(

                z => Math.max(

                  0.25,

                  z - 0.25

                )

              )

            }

          >

            －

          </button>

          <button

            onClick={() =>

              setZoom(1)

            }

          >

            Reset

          </button>

          <button

            disabled={isFirst}

            onClick={previousAsset}

          >

            ⬅ Previous

          </button>

          <button

            disabled={isLast}

            onClick={nextAsset}

          >

            Next ➡

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

          <div className="zoom-level">

            {Math.round(

              zoom * 100

            )}%

          </div>

          <div className="gallery-counter">

            {currentIndex + 1}

            {" / "}

            {assets.length}

          </div>

        </div>

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
