import { useState } from "react";

export default function ImageViewer({

  asset,

}) {

  const [zoom, setZoom] =
    useState(1);

  const [position, setPosition] =
    useState({

      x: 0,

      y: 0,

    });

  const [dragging, setDragging] =
    useState(false);

  const [startPoint, setStartPoint] =
    useState({

      x: 0,

      y: 0,

    });

  function wheelZoom(event) {

    event.preventDefault();

    const delta =

      event.deltaY < 0

        ? 0.15

        : -0.15;

    setZoom(previous =>

      Math.max(

        0.25,

        Math.min(

          6,

          previous + delta

        )

      )

    );

  }

  function mouseDown(event) {

    setDragging(true);

    setStartPoint({

      x:

        event.clientX -

        position.x,

      y:

        event.clientY -

        position.y,

    });

  }

  function mouseMove(event) {

    if (!dragging) return;

    setPosition({

      x:

        event.clientX -

        startPoint.x,

      y:

        event.clientY -

        startPoint.y,

    });

  }

  function mouseUp() {

    setDragging(false);

  }

  function resetView() {

    setZoom(1);

    setPosition({

      x: 0,

      y: 0,

    });

  }

  function doubleClick() {

    if (zoom === 1) {

      setZoom(2);

    }

    else {

      resetView();

    }

  }

  return (

    <div
      className="image-viewer"
    >

      <div
        className="image-toolbar"
      >

        <button
          onClick={() =>
            setZoom(z =>
              Math.min(
                6,
                z + 0.25
              )
            )
          }
        >

          ＋

        </button>

        <button
          onClick={() =>
            setZoom(z =>
              Math.max(
                0.25,
                z - 0.25
              )
            )
          }
        >

          －

        </button>

        <button
          onClick={resetView}
        >

          Reset

        </button>

        <div
          className="zoom-indicator"
        >

          {

            Math.round(

              zoom * 100

            )

          }%

        </div>

      </div>

      <div
        className="image-stage"
      >

        <img

          src={asset.data}

          alt={asset.name}

          draggable={false}

          onWheel={wheelZoom}

          onMouseDown={mouseDown}

          onMouseMove={mouseMove}

          onMouseUp={mouseUp}

          onMouseLeave={mouseUp}

          onDoubleClick={doubleClick}

          className="viewer-image"

          style={{

            transform:

              `translate(

                ${position.x}px,

                ${position.y}px

              )

              scale(${zoom})`,

            cursor:

              dragging

                ? "grabbing"

                : "grab",

          }}

        />

      </div>

    </div>

  );

}
