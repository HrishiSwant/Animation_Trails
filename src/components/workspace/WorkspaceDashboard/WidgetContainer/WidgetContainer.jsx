import "./WidgetContainer.css";

export default function WidgetContainer({

  children,

  index,

  onDragStart,

  onDrop,

  onDragOver,

}) {

  return (

    <div

      draggable

      className="widget-container"

      onDragStart={() =>

        onDragStart(index)

      }

      onDrop={() =>

        onDrop(index)

      }

      onDragOver={onDragOver}

    >

      {children}

    </div>

  );

}
