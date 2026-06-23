import "./CreativeLab.css";

import Notes from "../components/workspace/Notes/Notes";

export default function CreativeLab() {
  return (
    <div className="creative-lab">

      <div className="creative-header">

        <h1>Workspace</h1>

        <p>
          Your personal creative workspace.
        </p>

      </div>

      <div className="workspace-grid">

        <Notes />

      </div>

    </div>
  );
}
