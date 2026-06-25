import { useMemo, useState } from "react";

import WorkspaceSearchEngine from "../../core/workspace/WorkspaceSearchEngine";

import NotesSearchProvider from "../../providers/workspace/NotesSearchProvider";
import AssetsSearchProvider from "../../providers/workspace/AssetsSearchProvider";
import SketchSearchProvider from "../../providers/workspace/SketchSearchProvider";

export default function useWorkspaceSearch() {

  /*
  ==========================
      SEARCH QUERY
  ==========================
  */

  const [

    query,

    setQuery,

  ] = useState("");

  /*
  ==========================
      SEARCH PROVIDERS
  ==========================
  */

  const providers = useMemo(

    () => [

      NotesSearchProvider,

      AssetsSearchProvider,

      SketchSearchProvider,

    ],

    []

  );

  /*
  ==========================
      SEARCH RESULTS
  ==========================
  */

  const results = useMemo(

    () =>

      WorkspaceSearchEngine.search({

        query,

        providers,

      }),

    [

      query,

      providers,

    ]

  );

  /*
  ==========================
      HELPERS
  ==========================
  */

  function clearSearch() {

    setQuery("");

  }

  return {

    query,

    setQuery,

    results,

    clearSearch,

  };

}
