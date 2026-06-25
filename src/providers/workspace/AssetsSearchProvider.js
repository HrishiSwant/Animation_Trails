import AssetManager from "../../core/assets/AssetManager";

import SearchResultTypes from "../../core/workspace/SearchResultTypes";

export default class AssetsSearchProvider {

  static getEntries() {

    const assets =

      AssetManager.getAssets();

    return assets.map(asset => ({

      id: asset.id,

      type: SearchResultTypes.ASSET,

      title:

        asset.name ||

        "Unnamed Asset",

      content:

        asset.type ||

        "",

      original: asset,

    }));

  }

}
