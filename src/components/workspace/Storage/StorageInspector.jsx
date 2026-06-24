import { useEffect, useState } from "react";

import StorageManager from "../../../core/storage/StorageManager";
import StorageKeys from "../../../core/storage/StorageKeys";
import BackupManager from "../../../core/backup/BackupManager";
import RecoveryCenter from "./RecoveryCenter";
import "./StorageInspector.css";

export default function StorageInspector() {

  const [storageInfo, setStorageInfo] =
    useState([]);

  const [backupStatus, setBackupStatus] =
    useState("");

  function loadStorageInfo() {

    const keys = [

      {
        name: "Sketch",
        key: StorageKeys.SKETCH,
      },

      {
        name: "Notes",
        key: StorageKeys.NOTES,
      },

      {
        name: "Tasks",
        key: StorageKeys.TASKS,
      },

      {
        name: "Assets",
        key: StorageKeys.ASSETS,
      },

    ];

    const info = keys.map(item => {

      const raw =
        localStorage.getItem(item.key);

      if (!raw) {

        return {

          ...item,

          exists: false,

          size: 0,

          updatedAt: "-",

        };

      }

      try {

        const parsed =
          JSON.parse(raw);

        return {

          ...item,

          exists: true,

          size: raw.length,

          updatedAt:
            parsed.updatedAt || "-",

        };

      } catch {

        return {

          ...item,

          exists: true,

          size: raw.length,

          updatedAt: "Invalid",

        };

      }

    });

    setStorageInfo(info);

  }

  useEffect(() => {

    loadStorageInfo();

  }, []);

  function clearKey(key) {

    StorageManager.remove(key);

    loadStorageInfo();

  }

  function resetWorkspace() {

    const confirmed =
      window.confirm(
        "Reset entire workspace?"
      );

    if (!confirmed) return;

    StorageManager.clear();

    loadStorageInfo();

  }

  function downloadBackup() {

    BackupManager.downloadBackup();

    setBackupStatus(
      "Backup downloaded successfully."
    );

  }

  function uploadBackup(event) {

    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => {

      try {

        const backup =
          JSON.parse(
            e.target.result
          );

        const success =
          BackupManager.restoreBackup(
            backup
          );

        if (success) {

          setBackupStatus(
            "Backup restored successfully. Refresh the page."
          );

          loadStorageInfo();

        } else {

          setBackupStatus(
            "Invalid backup file."
          );

        }

      } catch {

        setBackupStatus(
          "Failed to restore backup."
        );

      }

    };

    reader.readAsText(file);

  }

  return (

    <div className="storage-inspector">

      <h2>

        Storage Inspector

      </h2>

      <div className="storage-list">

        {storageInfo.map(item => (

          <div
            key={item.key}
            className="storage-card"
          >

            <h3>

              {item.name}

            </h3>

            <p>

              Exists:
              {" "}
              {item.exists
                ? "Yes"
                : "No"}

            </p>

            <p>

              Size:
              {" "}
              {item.size}
              {" "}
              bytes

            </p>

            <p>

              Updated:
              {" "}
              {item.updatedAt}

            </p>

            <button
              onClick={() =>
                clearKey(item.key)
              }
            >
              Clear
            </button>

          </div>

        ))}

      </div>

      <div className="backup-section">

        <h2>

          Backup & Recovery

        </h2>

        <button
          onClick={downloadBackup}
        >
          📥 Download Backup
        </button>

        <label className="upload-label">

          📤 Upload Backup

          <input
            type="file"
            accept=".json"
            onChange={
              uploadBackup
            }
          />

        </label>

        {backupStatus && (

          <p className="backup-status">

            {backupStatus}

          </p>

        )}

      </div>

      <RecoveryCenter />

      <button
        className="reset-workspace"
        onClick={resetWorkspace}
      >
        Reset Entire Workspace
      </button>

    </div>

  );

}
