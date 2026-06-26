import "./Settings.css";

import SettingsSection from "./SettingsSection";

export default function SettingsContent({

  activeSection,

}) {

  return (

    <div className="settings-content">

      <SettingsSection

        activeSection={

          activeSection

        }

      />

    </div>

  );

}
