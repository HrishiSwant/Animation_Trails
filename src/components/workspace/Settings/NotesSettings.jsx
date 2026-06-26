import useNotesSettings from "../../../hooks/settings/useNotesSettings";

import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

const sortOptions = [

  {
    value: "newest",
    label: "Newest First",
  },

  {
    value: "oldest",
    label: "Oldest First",
  },

  {
    value: "alphabetical",
    label: "Alphabetical",
  },

];

export default function NotesSettings() {

  const notes =
    useNotesSettings();

  return (

    <div className="settings-section">

      <h2>

        📝 Notes

      </h2>

      <p>

        Configure how Notes behaves.

      </p>

      <SettingsToggle

        label="Autosave"

        description="Automatically save notes while typing."

        checked={notes.autosave}

        onChange={notes.setAutosave}

      />

      <SettingsToggle

        label="Spell Check"

        description="Enable browser spell checking."

        checked={notes.spellCheck}

        onChange={notes.setSpellCheck}

      />

      <SettingsToggle

        label="Word Wrap"

        description="Wrap long lines inside the editor."

        checked={notes.wordWrap}

        onChange={notes.setWordWrap}

      />

      <SettingsSelect

        label="Default Sort"

        description="Choose how notes are sorted."

        value={notes.defaultSort}

        options={sortOptions}

        onChange={notes.setDefaultSort}

      />

    </div>

  );

}
