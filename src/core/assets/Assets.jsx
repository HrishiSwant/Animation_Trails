import { useState } from "react";

import "./Assets.css";

import AssetManager from "../../../core/assets/AssetManager";

import AssetCard from "./AssetCard";

export default function Assets() {

  const [assets, setAssets] =
    useState(
      AssetManager.getAssets()
    );

  function upload(event) {

    const file =
      event.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload =
      () => {

        const asset = {

          id: Date.now(),

          name: file.name,

          type: file.type,

          size: file.size,

          createdAt:
            new Date().toISOString(),

          data:
            reader.result,

        };

        AssetManager.addAsset(
          asset
        );

        setAssets(
          AssetManager.getAssets()
        );

      };

    reader.readAsDataURL(
      file
    );

  }

  function deleteAsset(id) {

    AssetManager.deleteAsset(
      id
    );

    setAssets(
      AssetManager.getAssets()
    );

  }

  function toggleFavorite(id) {

  AssetManager.toggleFavorite(
    id
  );

  setAssets(
    AssetManager.getAssets()
  );

}

  return (

    <div className="assets">

      <h1>

        Asset Manager

      </h1>

      <input

        type="file"

        onChange={upload}

      />

      <div className="asset-grid">

        {assets.map(asset => (

          <AssetCard

            key={asset.id}

            asset={asset}

            onDelete={deleteAsset}

            onFavorite={toggleFavorite}

          />

        ))}

      </div>

    </div>

  );

}
