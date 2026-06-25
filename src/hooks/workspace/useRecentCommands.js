import { useState } from "react";

import RecentCommandManager from "../../core/workspace/RecentCommandManager";

export default function useRecentCommands() {

  const [

    recentCommands,

    setRecentCommands,

  ] = useState(

    RecentCommandManager.getRecent()

  );

  function addRecent(command) {

    RecentCommandManager.add(

      command

    );

    setRecentCommands(

      RecentCommandManager.getRecent()

    );

  }

  function clearRecent() {

    RecentCommandManager.clear();

    setRecentCommands([]);

  }

  return {

    recentCommands,

    addRecent,

    clearRecent,

  };

}
