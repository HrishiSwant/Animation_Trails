import useAssetsSettings from "../../../hooks/settings/useAssetsSettings";

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
    value: "name",
    label: "Name",
  },

  {
    value: "size",
    label: "File Size",
  },

];

export default function AssetsSettings() {

  const assets =
    useAssetsSettings();

  return (

    <div className="settings-section">

      <h2>

        📁 Asset Manager

      </h2>

      <p>

        Configure how the Asset Manager behaves.

      </p>

      <SettingsToggle

        label="Show Preview"

        description="Display previews for supported files."

        checked={assets.showPreview}

        onChange={assets.setShowPreview}

      />

      <SettingsToggle

        label="Confirm Before Delete"

        description="Ask for confirmation before deleting assets."

        checked={assets.confirmDelete}

        onChange={assets.setConfirmDelete}

      />

      <SettingsToggle

        label="Show Hidden Assets"

        description="Display hidden assets in the manager."

        checked={assets.showHidden}

        onChange={assets.setShowHidden}

      />

      <SettingsSelect

        label="Default Sort"

        description="Choose how assets are sorted."

        value={assets.defaultSort}

        options={sortOptions}

        onChange={assets.setDefaultSort}

      />

    </div>

  );

}
