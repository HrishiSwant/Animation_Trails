import { useState } from "react";

import "./Assets.css";

import AssetManager from "../../../core/assets/AssetManager";
import AssetCard from "./AssetCard";

export default function Assets() {

  const [assets, setAssets] =
    useState(
      AssetManager.getAssets()
    );

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const [sort, setSort] =
    useState("newest");

  function upload(event) {

    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {

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

      event.target.value = "";

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

  const filteredAssets =
    AssetManager.filterAssets(

      assets,

      search,

      filter,

      sort

    );

  return (

    <div className="assets">

      <h1>

        Asset Manager

      </h1>

      <input

        type="file"

        onChange={upload}

      />

      <div className="asset-toolbar">

        <input

          type="text"

          placeholder="🔍 Search assets..."

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

        />

        <select

          value={filter}

          onChange={(e) =>
            setFilter(
              e.target.value
            )
          }

        >

          <option value="all">

            All Files

          </option>

          <option value="images">

            Images

          </option>

          <option value="video">

            Videos

          </option>

          <option value="audio">

            Audio

          </option>

          <option value="pdf">

            PDFs

          </option>

          <option value="favorites">

            Favorites

          </option>

        </select>

        <select

          value={sort}

          onChange={(e) =>
            setSort(
              e.target.value
            )
          }

        >

          <option value="newest">

            Newest

          </option>

          <option value="oldest">

            Oldest

          </option>

          <option value="name">

            Name

          </option>

          <option value="size">

            File Size

          </option>

        </select>

      </div>

      {filteredAssets.length === 0 ? (

        <div className="empty-assets">

          <h3>

            No assets found

          </h3>

          <p>

            Upload a file or adjust your search/filter.

          </p>

        </div>

      ) : (

        <div className="asset-grid">

          {filteredAssets.map(asset => (

            <AssetCard

              key={asset.id}

              asset={asset}

              onDelete={deleteAsset}

              onFavorite={toggleFavorite}

            />

          ))}

        </div>

      )}

    </div>

  );

}
