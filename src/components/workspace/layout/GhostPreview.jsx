import "./GhostPreview.css";

import useDockDrag from "../../../hooks/layout/useDockDrag";

export default function GhostPreview() {

  const {

    dragging,

    panel,

    position,

  } = useDockDrag();

  if (

    !dragging ||

    !panel

  ) {

    return null;

  }

  return (

    <div

      className="ghost-preview"

      style={{

        left: position.x,

        top: position.y,

      }}

    >

      <div className="ghost-header">

        {panel}

      </div>

    </div>

  );

}
