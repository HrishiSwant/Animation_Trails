import { useState } from "react";

import "./Assets.css";

import useAssets from "../../../hooks/assets/useAssets";
import useAssetUpload from "../../../hooks/assets/useAssetUpload";
import useAssetFilters from "../../../hooks/assets/useAssetFilters";

import AssetCard from "./AssetCard";
import AssetViewer from "./AssetViewer";

export default function Assets() {

  const [selectedIndex, setSelectedIndex] =
    useState(-1);

  /*
  ==========================
      ASSET STATE
  ==========================
  */

  const {

    assets,

    refreshAssets,

    deleteAsset,

    toggleFavorite,

  } = useAssets();

  /*
  ==========================
      UPLOAD
  ==========================
  */

  const {

    upload,

  } = useAssetUpload({

    refreshAssets,

  });

  /*
  ==========================
      SEARCH / FILTER / SORT
  ==========================
  */

  const {

    search,

    setSearch,

    filter,

    setFilter,

    sort,

    setSort,

    filteredAssets,

  } = useAssetFilters(

    assets

  );

  /*
  ==========================
      DELETE
  ==========================
  */

  function handleDelete(id) {

    deleteAsset(id);

    if (

      selectedIndex !== -1 &&

      filteredAssets[selectedIndex]?.id === id

    ) {

      setSelectedIndex(-1);

    }

  }

  /*
  ==========================
      UI
  ==========================
  */

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

          {filteredAssets.map((asset, index) => (

            <AssetCard

              key={asset.id}

              asset={asset}

              onDelete={handleDelete}

              onFavorite={toggleFavorite}

              onOpen={() =>

                setSelectedIndex(index)

              }

            />

          ))}

        </div>

      )}

      <AssetViewer

        assets={filteredAssets}

        currentIndex={selectedIndex}

        onNavigate={setSelectedIndex}

        onClose={() =>

          setSelectedIndex(-1)

        }

      />

    </div>

  );

}
