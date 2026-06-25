import { useState } from "react";

import AssetManager from "../../core/assets/AssetManager";

export default function useAssets() {

  const [assets, setAssets] =
    useState(
      AssetManager.getAssets()
    );

  function refreshAssets() {

    setAssets(
      AssetManager.getAssets()
    );

  }

  function addAsset(asset) {

    AssetManager.addAsset(
      asset
    );

    refreshAssets();

  }

  function deleteAsset(id) {

    AssetManager.deleteAsset(
      id
    );

    refreshAssets();

  }

  function toggleFavorite(id) {

    AssetManager.toggleFavorite(
      id
    );

    refreshAssets();

  }

  return {

    assets,

    refreshAssets,

    addAsset,

    deleteAsset,

    toggleFavorite,

  };

}
