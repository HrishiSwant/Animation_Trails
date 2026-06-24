import { useEffect, useState } from "react";

import RecoveryManager from "../../../core/recovery/RecoveryManager";

export default function RecoveryCenter() {

  const [snapshots, setSnapshots] =
    useState([]);

  function loadSnapshots() {

    setSnapshots(
      RecoveryManager.getSnapshots()
    );

  }

  useEffect(() => {

    loadSnapshots();

  }, []);

  function deleteSnapshot(id) {

    RecoveryManager.deleteSnapshot(id);

    loadSnapshots();

  }

  function clearAll() {

    const confirmed =
      window.confirm(
        "Delete all recovery points?"
      );

    if (!confirmed) return;

    RecoveryManager.clearSnapshots();

    loadSnapshots();

  }

  function restoreSnapshot(snapshot) {

    const confirmed =
      window.confirm(
        "Restore this recovery point?"
      );

    if (!confirmed) return;

    try {

      const { key, payload } =
        snapshot.data;

      localStorage.setItem(

        key,

        JSON.stringify(payload)

      );

      alert(
        "Recovery restored. Refresh the page."
      );

    } catch {

      alert(
        "Recovery failed."
      );

    }

  }

  return (

    <div className="recovery-center">

      <h2>

        Recovery Center

      </h2>

      {snapshots.length === 0 && (

        <p>

          No recovery points available.

        </p>

      )}

      {snapshots.map(snapshot => (

        <div
          key={snapshot.id}
          className="recovery-card"
        >

          <div>

            <strong>

              {snapshot.data.key}

            </strong>

            <p>

              {new Date(
                snapshot.createdAt
              ).toLocaleString()}

            </p>

          </div>

          <div className="recovery-actions">

            <button
              onClick={() =>
                restoreSnapshot(
                  snapshot
                )
              }
            >
              Restore
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

      ))}

      {snapshots.length > 0 && (

        <button
          className="clear-recovery"
          onClick={clearAll}
        >
          Clear Recovery History
        </button>

      )}

    </div>

  );

}
