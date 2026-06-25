import StorageManager from "../storage/StorageManager";
import StorageKeys from "../storage/StorageKeys";

export default class AssetManager {

  static getAssets() {

    return StorageManager.load(
      StorageKeys.ASSETS,
      []
    );

  }

  static saveAssets(assets) {

    StorageManager.save(
      StorageKeys.ASSETS,
      assets
    );

  }

  static addAsset(asset) {

    const assets =
      this.getAssets();

    assets.unshift({

      ...asset,

      favorite: false,

    });

    this.saveAssets(assets);

  }

  static deleteAsset(id) {

    this.saveAssets(

      this.getAssets().filter(

        asset => asset.id !== id

      )

    );

  }

  static toggleFavorite(id) {

    const assets =
      this.getAssets().map(

        asset =>

          asset.id === id

            ? {

                ...asset,

                favorite:
                  !asset.favorite,

              }

            : asset

      );

    this.saveAssets(assets);

  }

  static filterAssets(
    assets,
    search,
    filter,
    sort
  ) {

    let result = [...assets];

    if (search.trim()) {

      result = result.filter(

        asset =>

          asset.name
            .toLowerCase()
            .includes(

              search.toLowerCase()

            )

      );

    }

    switch (filter) {

      case "images":

        result = result.filter(

          a =>

            a.type.startsWith("image/")

        );

        break;

      case "video":

        result = result.filter(

          a =>

            a.type.startsWith("video/")

        );

        break;

      case "audio":

        result = result.filter(

          a =>

            a.type.startsWith("audio/")

        );

        break;

      case "pdf":

        result = result.filter(

          a =>

            a.type ===
            "application/pdf"

        );

        break;

      case "favorites":

        result = result.filter(

          a => a.favorite

        );

        break;

      default:

        break;

    }

    switch (sort) {

      case "oldest":

        result.sort(

          (a, b) =>

            new Date(a.createdAt) -

            new Date(b.createdAt)

        );

        break;

      case "name":

        result.sort(

          (a, b) =>

            a.name.localeCompare(
              b.name
            )

        );

        break;

      case "size":

        result.sort(

          (a, b) =>

            b.size - a.size

        );

        break;

      default:

        result.sort(

          (a, b) =>

            new Date(b.createdAt) -

            new Date(a.createdAt)

        );

    }

    return result;

  }

}
