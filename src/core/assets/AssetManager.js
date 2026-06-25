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

    assets.unshift(asset);

    this.saveAssets(
      assets
    );

  }

  static deleteAsset(id) {

    const assets =
      this.getAssets().filter(

        asset =>
          asset.id !== id

      );

    this.saveAssets(
      assets
    );

  }

}
