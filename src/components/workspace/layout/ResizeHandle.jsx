import "./ResizeHandle.css";

export default function ResizeHandle({

  onMouseDown,

}) {

  return (

    <div

      className="resize-handle"

      onMouseDown={onMouseDown}

    />

  );

}
