import "./WorkspaceInspector.css";

export default function WorkspaceInspector({

  width,

  hidden,

}) {

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

      Inspector

    </aside>

  );

}
