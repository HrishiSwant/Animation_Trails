export default function ImageViewer({

  asset,

  zoom,

  position,

  dragging,

  wheelZoom,

  mouseDown,

  mouseMove,

  mouseUp,

  doubleClick,

}) {

  return (

    <img

      src={asset.data}

      alt={asset.name}

      className="viewer-image"

      draggable={false}

      onWheel={wheelZoom}

      onMouseDown={mouseDown}

      onMouseMove={mouseMove}

      onMouseUp={mouseUp}

      onMouseLeave={mouseUp}

      onDoubleClick={doubleClick}

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

  );

}
