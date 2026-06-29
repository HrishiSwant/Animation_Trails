import "./DropZoneOverlay.css";

import useDockDrag from "../../../hooks/layout/useDockDrag";

import DropZone from "./DropZone";

export default function DropZoneOverlay() {

  const {

    dragging,

  } = useDockDrag();

  if (!dragging) {

    return null;

  }

  return (

    <div className="drop-zone-overlay">

      <DropZone position="top" />

      <DropZone position="left" />

      <DropZone position="center" />

      <DropZone position="right" />

      <DropZone position="bottom" />

    </div>

  );

}
