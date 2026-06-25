import { useState } from "react";

import FavoriteCommandManager from "../../core/workspace/FavoriteCommandManager";

export default function useFavoriteCommands() {

  const [

    favorites,

    setFavorites,

  ] = useState(

    FavoriteCommandManager.getFavorites()

  );

  function refreshFavorites() {

    setFavorites(

      FavoriteCommandManager.getFavorites()

    );

  }

  function toggleFavorite(id) {

    FavoriteCommandManager.toggle(id);

    refreshFavorites();

  }

  function isFavorite(id) {

    return favorites.includes(id);

  }

  function clearFavorites() {

    FavoriteCommandManager.clear();

    refreshFavorites();

  }

  return {

    favorites,

    refreshFavorites,

    toggleFavorite,

    isFavorite,

    clearFavorites,

  };

}
