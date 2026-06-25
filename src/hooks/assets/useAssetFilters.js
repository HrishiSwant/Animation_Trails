import { useMemo, useState } from "react";

import AssetManager from "../../core/assets/AssetManager";

export default function useAssetFilters(assets) {

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const [sort, setSort] =
    useState("newest");

  const filteredAssets =
    useMemo(() => {

      return AssetManager.filterAssets(

        assets,

        search,

        filter,

        sort

      );

    }, [

      assets,

      search,

      filter,

      sort,

    ]);

  return {

    search,

    setSearch,

    filter,

    setFilter,

    sort,

    setSort,

    filteredAssets,

  };

}
