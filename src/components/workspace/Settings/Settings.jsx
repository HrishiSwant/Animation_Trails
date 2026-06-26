import { useState } from "react";

import "./Settings.css";

import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";

export default function Settings() {

  /*
  ==========================
      ACTIVE SECTION
  ==========================
  */

  const [

    activeSection,

    setActiveSection,

  ] = useState(

    "appearance"

  );

  return (

    <div className="settings">

      <SettingsSidebar

        activeSection={

          activeSection

        }

        onChange={

          setActiveSection

        }

      />

      <SettingsContent

        activeSection={

          activeSection

        }

      />

    </div>

  );

}
