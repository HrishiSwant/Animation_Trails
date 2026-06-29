import { useState } from "react";

import "./WorkspaceInspector.css";

import useLayout from "../../../hooks/layout/useLayout";
import useDock from "../../../hooks/layout/useDock";

import DockMenu from "./DockMenu";

export default function WorkspaceInspector({

  width,

  hidden,

}) {

  const [

    menuOpen,

    setMenuOpen,

  ] = useState(false);

  const {

    toggleInspector,

  } = useLayout();

  const {

    setDockPosition,

  } = useDock();

  return (

    <aside

      className="workspace-inspector"

      style={{

        width,

        opacity:

          hidden ? 0 : 1,

        transform:

          hidden

            ? "translateX(20px)"

            : "translateX(0)",

        pointerEvents:

          hidden

            ? "none"

            : "auto",

      }}

    >

      <header className="inspector-header">

        <h4>

          Inspector

        </h4>

        <button

          className="inspector-menu-btn"

          onClick={() =>

            setMenuOpen(

              value => !value,

            )

          }

          title="Dock Options"

        >

          ⋮

        </button>

      </header>

      {

        menuOpen && (

          <DockMenu

            onLeft={() => {

              setDockPosition(

                "inspector",

                "left",

              );

              setMenuOpen(false);

            }}

            onRight={() => {

              setDockPosition(

                "inspector",

                "right",

              );

              setMenuOpen(false);

            }}

            onBottom={() => {

              setDockPosition(

                "inspector",

                "bottom",

              );

              setMenuOpen(false);

            }}

            onHide={() => {

              toggleInspector();

              setMenuOpen(false);

            }}

          />

        )

      }

      <div className="inspector-content">

        Inspector

      </div>

    </aside>

  );

}
