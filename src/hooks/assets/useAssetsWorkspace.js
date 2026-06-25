import useAssets from "./useAssets";
import useAssetUpload from "./useAssetUpload";
import useAssetFilters from "./useAssetFilters";
import useGallery from "./useGallery";

export default function useAssetsWorkspace() {

  /*
  ==========================
      Assets
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
      Upload
  ==========================
  */

  const {

    upload,

  } = useAssetUpload({

    refreshAssets,

  });

  /*
  ==========================
      Filters
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
      Gallery
  ==========================
  */

  const {

    currentIndex,

    open,

    close,

    navigate,

  } = useGallery();

  /*
  ==========================
      Delete Wrapper
  ==========================
  */

  function handleDelete(id) {

    deleteAsset(id);

    if (

      currentIndex !== -1 &&

      filteredAssets[currentIndex]?.id === id

    ) {

      close();

    }

  }

  return {

    assets,

    filteredAssets,

    upload,

    handleDelete,

    toggleFavorite,

    search,

    setSearch,

    filter,

    setFilter,

    sort,

    setSort,

    currentIndex,

    open,

    close,

    navigate,

  };

}
