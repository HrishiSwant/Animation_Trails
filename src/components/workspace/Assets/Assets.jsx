import "./Assets.css";

import useAssetsWorkspace from "../../../hooks/assets/useAssetsWorkspace";

import AssetCard from "./AssetCard";
import AssetViewer from "./AssetViewer";

export default function Assets() {

  const workspace =
    useAssetsWorkspace();

  return (

    <div className="assets">

      <h1>

        Asset Manager

      </h1>

      <input

        type="file"

        onChange={workspace.upload}

      />

      <div className="asset-toolbar">

        <input

          type="text"

          placeholder="🔍 Search assets..."

          value={workspace.search}

          onChange={(e)=>

            workspace.setSearch(

              e.target.value

            )

          }

        />

        <select

          value={workspace.filter}

          onChange={(e)=>

            workspace.setFilter(

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

          value={workspace.sort}

          onChange={(e)=>

            workspace.setSort(

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

      {

        workspace.filteredAssets.length === 0

        ? (

          <div className="empty-assets">

            <h3>

              No assets found

            </h3>

            <p>

              Upload a file or adjust your search/filter.

            </p>

          </div>

        )

        : (

          <div className="asset-grid">

            {

              workspace.filteredAssets.map(

                (asset,index)=>(

                  <AssetCard

                    key={asset.id}

                    asset={asset}

                    onDelete={workspace.handleDelete}

                    onFavorite={workspace.toggleFavorite}

                    onOpen={()=>

                      workspace.open(index)

                    }

                  />

                )

              )

            }

          </div>

        )

      }

      <AssetViewer

        assets={workspace.filteredAssets}

        currentIndex={workspace.currentIndex}

        onNavigate={workspace.navigate}

        onClose={workspace.close}

      />

    </div>

  );

}
