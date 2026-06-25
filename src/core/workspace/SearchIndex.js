export default class SearchIndex {

  static build({

    notes = [],

    assets = [],

    sketches = [],

    tasks = [],

    exports = [],

  }) {

    return [

      ...notes,

      ...assets,

      ...sketches,

      ...tasks,

      ...exports,

    ];

  }

}
