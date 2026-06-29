import "./DockMenu.css";

export default function DockMenu({

  onLeft,

  onRight,

  onBottom,

  onHide,

}) {

  return (

    <div className="dock-menu">

      <button onClick={onLeft}>

        Move Left

      </button>

      <button onClick={onRight}>

        Move Right

      </button>

      <button onClick={onBottom}>

        Move Bottom

      </button>

      <hr />

      <button onClick={onHide}>

        Hide Panel

      </button>

    </div>

  );

}
