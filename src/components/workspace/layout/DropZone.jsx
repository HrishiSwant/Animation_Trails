import "./DropZone.css";

export default function DropZone({

  position,

  active,

}) {

  return (

    <div

      className={

        `drop-zone ${

          active

            ? "active"

            : ""

        }`

      }

      data-position={position}

    />

  );

}
