import useSettings from "./useSettings";

export default function useAssetsSettings() {

  const settings =
    useSettings();

  const assets =
    settings.settings.assets;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "assets",

      key,

      value,

    );

  }

  function setShowPreview(value) {

    update(

      "showPreview",

      value,

    );

  }

  function setConfirmDelete(value) {

    update(

      "confirmDelete",

      value,

    );

  }

  function setShowHidden(value) {

    update(

      "showHidden",

      value,

    );

  }

  function setDefaultSort(value) {

    update(

      "defaultSort",

      value,

    );

  }

  return {

    assets,

    showPreview:
      assets.showPreview,

    confirmDelete:
      assets.confirmDelete,

    showHidden:
      assets.showHidden,

    defaultSort:
      assets.defaultSort,

    update,

    setShowPreview,

    setConfirmDelete,

    setShowHidden,

    setDefaultSort,

  };

}
