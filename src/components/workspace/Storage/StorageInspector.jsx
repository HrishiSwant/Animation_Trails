import { useEffect, useState } from "react";

import StorageManager from "../../../core/storage/StorageManager";
import StorageKeys from "../../../core/storage/StorageKeys";

import "./StorageInspector.css";

export default function StorageInspector() {

  const [storageInfo, setStorageInfo] =
    useState([]);

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

    StorageManager.clear();

    loadStorageInfo();

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

            <h3>{item.name}</h3>

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

      <button
        className="reset-workspace"
        onClick={resetWorkspace}
      >
        Reset Entire Workspace
      </button>

    </div>

  );

}
