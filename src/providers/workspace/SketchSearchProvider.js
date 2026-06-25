import StorageManager from "../../core/storage/StorageManager";
import StorageKeys from "../../core/storage/StorageKeys";

import SearchResultTypes from "../../core/workspace/SearchResultTypes";

export default class SketchSearchProvider {

  static getEntries() {

    const sketch =

      StorageManager.load(

        StorageKeys.SKETCH,

        null

      );

    if (!sketch) {

      return [];

    }

    return [

      {

        id: "workspace-sketch",

        type: SearchResultTypes.SKETCH,

        title:

          "Workspace Sketch",

        content:

          JSON.stringify(

            sketch

          ),

        original: sketch,

      },

    ];

  }

}
