import SearchIndex from "./SearchIndex";
import WorkspaceSearchScorer from "./WorkspaceSearchScorer";

export default class WorkspaceSearchEngine {

  /*
  ==========================
      SEARCH
  ==========================
  */

  static search({

    providers = [],

    query = "",

  }) {

    if (

      !query.trim()

    ) {

      return [];

    }

    /*
    ==========================
        BUILD INDEX
    ==========================
    */

    const index =
      SearchIndex.create();

    providers.forEach(

      provider => {

        const entries =

          provider.getEntries();

        SearchIndex.add(

          index,

          entries

        );

      }

    );

    /*
    ==========================
        SCORE RESULTS
    ==========================
    */

    const results =
      index

        .map(item => ({

          ...item,

          score:

            WorkspaceSearchScorer.score(

              item,

              query

            ),

        }))

        .filter(item =>

          item.score > 0

        )

        .sort(

          (a, b) =>

            b.score -

            a.score

        );

    return results;

  }

}
