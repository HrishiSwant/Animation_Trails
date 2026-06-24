import { useEffect, useState } from "react";

import WorkspaceRecoveryManager from "../../../core/recovery/WorkspaceRecoveryManager";

export default function WorkspaceRecoveryCenter() {

  const [snapshots, setSnapshots] =
    useState([]);

  function loadSnapshots() {

    setSnapshots(
      WorkspaceRecoveryManager.getSnapshots()
    );

  }

  useEffect(() => {

    loadSnapshots();

  }, []);

  function createSnapshot() {

    WorkspaceRecoveryManager.createSnapshot();

    loadSnapshots();

  }

  function rollback(id) {

    const confirmed =
      window.confirm(
        "Rollback entire workspace?"
      );

    if (!confirmed) return;

    const success =
      WorkspaceRecoveryManager.rollback(
        id
      );

    if (success) {

      alert(
        "Workspace restored. Refreshing..."
      );

      window.location.reload();

    }

  }

  function deleteSnapshot(id) {

    WorkspaceRecoveryManager.deleteSnapshot(
      id
    );

    loadSnapshots();

  }

  function clearAll() {

    const confirmed =
      window.confirm(
        "Delete all workspace snapshots?"
      );

    if (!confirmed) return;

    WorkspaceRecoveryManager.clear();

    loadSnapshots();

  }

  return (

    <div className="workspace-recovery-center">

      <h2>

        Workspace Recovery

      </h2>

      <button
        onClick={createSnapshot}
      >
        📸 Create Snapshot
      </button>

      {snapshots.length === 0 && (

        <p>

          No workspace snapshots available.

        </p>

      )}

      {snapshots.map(
        (snapshot, index) => (

          <div
            key={snapshot.id}
            className="workspace-snapshot-card"
          >

            <div>

              <strong>

                Workspace Snapshot #

                {snapshots.length - index}

              </strong>

              <p>

                {new Date(
                  snapshot.createdAt
                ).toLocaleString()}

              </p>

            </div>

            <div>

              <button
                onClick={() =>
                  rollback(
                    snapshot.id
                  )
                }
              >
                Rollback
              </button>

              <button
                onClick={() =>
                  deleteSnapshot(
                    snapshot.id
                  )
                }
              >
                Delete
              </button>

            </div>

          </div>

        )
      )}

      {snapshots.length > 0 && (

        <button
          className="clear-workspace-history"
          onClick={clearAll}
        >
          Clear Workspace History
        </button>

      )}

    </div>

  );

}
