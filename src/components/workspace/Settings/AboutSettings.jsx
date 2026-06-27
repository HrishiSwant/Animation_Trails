import "./Settings.css";

const APP_INFO = {

  name: "Hrishi Studio",

  version: "v0.2.1",

  author: "Hrishikesh Sawant",

  description:

    "A modern creative workspace for notes, sketches, assets, tasks, presentations and project management.",

};

export default function AboutSettings() {

  return (

    <div className="settings-section">

      <h2>

        ℹ️ About

      </h2>

      <p>

        Information about Hrishi Studio.

      </p>

      <div className="settings-info-card">

        <div className="settings-info-row">

          <span>

            Application

          </span>

          <strong>

            {APP_INFO.name}

          </strong>

        </div>

        <div className="settings-info-row">

          <span>

            Version

          </span>

          <strong>

            {APP_INFO.version}

          </strong>

        </div>

        <div className="settings-info-row">

          <span>

            Developer

          </span>

          <strong>

            {APP_INFO.author}

          </strong>

        </div>

      </div>

      <div className="settings-about-description">

        <h3>

          Description

        </h3>

        <p>

          {APP_INFO.description}

        </p>

      </div>

      <div className="settings-about-description">

        <h3>

          Workspace Modules

        </h3>

        <ul>

          <li>📝 Notes</li>

          <li>🎨 Sketch Board</li>

          <li>📁 Asset Manager</li>

          <li>✅ Task Manager</li>

          <li>💾 Storage Inspector</li>

          <li>📤 Export Center</li>

          <li>🎬 Presentation Mode</li>

          <li>⚙️ Settings</li>

        </ul>

      </div>

    </div>

  );

}
